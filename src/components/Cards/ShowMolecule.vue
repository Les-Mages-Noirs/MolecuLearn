<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import * as d3 from 'd3';
import { Molecule } from '../../api/types';

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
  

  const _links = props.molecule.connections.map((c) => {
    return { source: c.atom1.id, target: c.atom2.id, type: valueToLinkType(c.value) };
  });

  let _nodes = [] as any[];

  props.molecule.connections.forEach((c) => {
    if (!_nodes.find((n) => n.id == c.atom1.id)) {
      _nodes.push({ id: c.atom1.id, name: c.atom1.atom.symbol });
    }

    if (!_nodes.find((n) => n.id == c.atom2.id)) {
       _nodes.push({ id: c.atom2.id, name: c.atom2.atom.symbol });
     }
  });

  console.log(_links, _nodes);
  

 
  

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

  onMounted(() => {
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
