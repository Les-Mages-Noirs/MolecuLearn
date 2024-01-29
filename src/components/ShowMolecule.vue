<script setup lang="ts">
// @ts-nocheck
  import { ref, onMounted, computed } from 'vue';
  import * as d3 from 'd3';
import { Molecule } from '../../api/types';
import { getConnectionFromIRI } from '../api/connection';
import { getAtomFromIRI } from '../api/atom';
import { getAtomNodeFromIRI } from '../api/atomNode';

  const props = defineProps<{
    molecule: Molecule;
  }>();

  console.log(props.molecule);

  const valueToLinkType = (value: number) => {
    switch (value) {
      case 1:
        return 'simple';
      case 2:
        return 'double';
      case 3:
        return 'triple';
      default:
        return 'simple';
    }
  };
  const connections = ref([]);
  const atoms = ref([]);

  const fetchData = async () => {
    
    const ps = props.molecule.connections.map(async (IRI) => {
      const c = await getConnectionFromIRI(IRI);
      const atom1 = await getAtomNodeFromIRI(c.atom1);
      const atom2 = await getAtomNodeFromIRI(c.atom2);

      console.log("aaa", atom1, atom2,atoms.value)
    
      const atomDetails = await getAtomFromIRI(atom1.atom);
      atoms.value.push({ id: atom1.id, name: atomDetails.symbol });
       
      const atomDetails2 = await getAtomFromIRI(atom2.atom);
      atoms.value.push({ id: atom2.id, name: atomDetails.symbol });
      

      connections.value.push({ atom1, atom2, value: c.value });
    });
    await Promise.all(ps)

    // verifie que les atome sont unique si il y'en a en double supprime les doublons
    atoms.value = atoms.value.filter((atom, index, self) =>
      index === self.findIndex((t) => t.id === atom.id)
    );
  };

  await fetchData();

  const _links = connections.value.map((c) => {
    return { source: c.atom1.id, target: c.atom2.id, type: valueToLinkType(c.value) };
  });

  let _nodes = atoms.value.map((a) => {
    return { id: a.id, name: a.name };
  });

  
  const svg = ref(null);
  let data = {
    nodes: [..._nodes
    
  ],
  links: [
    ..._links
  ]
};

const colorScale = d3.scaleOrdinal().domain(['simple', 'double', 'triple']).range(['black', 'red', 'blue']);

const updateGraph = () => {
  if (!svg.value) return;

  console.log('update graph')
  console.log(data)
  
  const svgElement = d3.select(svg.value);
  svgElement.selectAll('*').remove();
  
  const svgWidth = +svgElement.attr('width');
  const svgHeight = +svgElement.attr('height');
  const margin = 20;
  
  const nodesForRuntime = [...data.nodes];
  const linksForRuntime = [...data.links];
  
  const simulation = d3
  .forceSimulation(nodesForRuntime)
  .force(
    'link',
    d3.forceLink(linksForRuntime)
    .id(d => d.id)
    .distance(100)
    .strength(0.5)
    )
    .force('charge', d3.forceManyBody().strength(-150))
    .force('x', d3.forceX(svgWidth / 2).strength(0.1))
    .force('y', d3.forceY(svgHeight / 2).strength(0.1))
    .force('collide', d3.forceCollide().radius(15));
    
    const link = svgElement
    .selectAll('.link')
    .data(linksForRuntime)
    .enter()
    .append('line')
    .attr('class', 'link')
    .style('stroke', d => colorScale(d.type))
    .style('stroke-width', 3)
    .on('click', (_, d, i) => {
      if (modeSuppression.value) {
        console.log('supprimer liaison', d.index);
        data.links.splice(d.index, 1);
        updateGraph();
      }
    });
    
    const node = svgElement
    .selectAll('.node')
    .data(nodesForRuntime)
    .enter()
    .append('g')
    .attr('class', 'node')
    
    node.append('circle')
    .attr('r', 10)
    .style('fill', '#fff')
    .style('stroke', '#fff')
    .style('stroke-width', 2);
    
    node
    .append('text')
    .attr('dy', '.35em')
    .attr('text-anchor', 'middle')
    .style('fill', '#000')
    .text(d => d.name);
    
    simulation.on('tick', () => {
      link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
      
      node
      .attr('transform', d => `translate(${Math.max(margin, Math.min(svgWidth - margin, d.x))},${Math.max(
        margin,
        Math.min(svgHeight - margin, d.y)
        )})`);
      });
    };
    
    updateGraph();
    onMounted(async () => {
      updateGraph();
    });
  </script>

<template>
  <div class="graph-container">
    <div class="svg-container w-full">
      <svg ref="svg" width="600" height="400"></svg>
    </div>
  </div>
</template>

<style>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
</style>
