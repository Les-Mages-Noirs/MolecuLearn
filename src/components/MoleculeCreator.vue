<script setup lang="ts">
// @ts-nocheck
  import { ref, onMounted, computed } from 'vue';
  import * as d3 from 'd3';
  import { Atom, AtomNode, Molecule } from '../api/types';
  import { getAtoms } from '../api/atom';
import { createAtomNode } from '../api/atomNode';
import { createMolecule } from '../api/molecule';
import { createConnection } from '../api/connection';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

  const selectedSymbol = ref('');
  const moleculeName = ref('');
  const moleculeDescription = ref('');
  const errorDisplay = ref<HTMLParagraphElement | null>(null);
  const router = useRouter();



  const atoms = ref<Atom[]>();
  const uniqueSymbols = computed(() => {
  return Array.from(new Set(atoms.value?.map(atom => atom.symbol)));
  });
  getAtoms().then((_atoms) => {
    atoms.value = _atoms
    console.log(atoms.value)
  })

  const symbolToAtom = (symbol: string) => {
    return atoms.value?.find((atom) => atom.symbol === symbol);
  };
  

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

  const linkTypeToValue = (type: string) => {
    switch (type) {
      case 'simple':
        return 1;
      case 'double':
        return 2;
      case 'triple':
        return 3;
      default:
        return 1;
    }
  };
    

  const svg = ref(null);
  let modeLiaison = ref(false);
  let modeSuppression = ref(false);
  const selectedType = ref('simple'); // Initial value of selected type
  let nodeSelection = null;
  let data = {
    nodes: [],
    links: []
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
      .classed('draggable', () => !modeLiaison.value)
      .call(drag(simulation));

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

    node.on('click', function (_, d) {
      if (modeSuppression.value) {
        console.log('supprimer noeud', d);
        data.nodes.splice(d.index, 1);
        data.links = data.links.filter((l) =>  l.source.id != d.id && l.target.id != d.id);
        console.log(data.links)
        updateGraph();
      }
    
      if (modeLiaison.value) {
        if (!nodeSelection) {
          nodeSelection = d;
        } else {
          if (nodeSelection.id !== d.id) {
            ajouterLiaison(nodeSelection, d); // Call the function to add a new link
          }
          nodeSelection = null;
        }
      }
    });
  };

  const toggleMode = () => {
    modeLiaison.value = !modeLiaison.value;
    if (!modeLiaison.value) {
      nodeSelection = null;
    } else {
      modeSuppression.value = false;
    }
  };

  const toggleModeSuppression = () => {
    modeSuppression.value = !modeSuppression.value;
    if (modeSuppression.value) {
      modeLiaison.value = false;
    }
  };

  const ajouterNoeud = () => {
    if (!selectedSymbol.value) return;
    const newNodeId = data.nodes.length + 1;
    const newNode = { id: newNodeId, name: selectedSymbol.value };
    data.nodes.push(newNode);
    updateGraph();
  };

  const ajouterLiaison = (source, target) => {
    const newLink = { source: source.id, target: target.id, type: selectedType.value };
    data.links.push(newLink);
    updateGraph();
  };

  onMounted(() => {
    updateGraph();
  });

  const drag = (simulation) => {
    const dragstarted = (event, d) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    };

    const dragged = (event, d) => {
      d.fx = event.x;
      d.fy = event.y;
    };

    const dragended = (event, d) => {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    };

    return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
  };

  const create = async () => {

    if (!moleculeName.value) return displayError('Le nom de la molécule est obligatoire');
    if (!moleculeDescription.value) return displayError('La description de la molécule est obligatoire');
    if (!data.nodes.length) return displayError('La molécule doit contenir au moins un atome');
    if (!data.links.length) return displayError('La molécule doit contenir au moins une liaison');


    const molecule = await createMolecule(moleculeName.value, moleculeDescription.value);

    const oldIdToAtomNode = new Map<number, AtomNode>();
    console.log(data.nodes)

    let ps = data.nodes.map(async (node) => {
      const atom = symbolToAtom(node.name);
      if (!atom) return;
      console.log("iiiiiiii", atom)
      const atomNode = await createAtomNode(atom);
      console.log("never", atomNode.id)
      oldIdToAtomNode.set(+node.id, atomNode);
      console.log(oldIdToAtomNode)
    });

    await Promise.all(ps);

    ps = data.links.map(async (link) => {
      const source = oldIdToAtomNode.get(link.source.id);
      const target = oldIdToAtomNode.get(link.target.id);
      console.log("aaaaaaa", source, target) 
      if (!source || !target) return;
      const linkType = linkTypeToValue(link.type);
      console.log(linkType)
      await createConnection(source, target, linkType, molecule);
    });

    await Promise.all(ps);

    useToast().success('Molécule créée avec succès');
    router.push('/molecules');
  
  }

  const displayError = (message: string) => {
  if (errorDisplay.value) {
    errorDisplay.value.innerText = message;
  }
};

</script>

<template>
  <div class="graph-container">
    <p ref="errorDisplay" class="text-red-500"></p>
    <label for="name">Nom de la molécule:</label>
    <input type="text" v-model="moleculeName" id="name">

    <label for="description">Description de la molécule:</label>
    <input type="text" v-model="moleculeDescription" id="description">

    <div class="svg-container w-full">
      <svg ref="svg" width="600" height="400"></svg>
    </div>
    <button @click="toggleMode" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      {{ modeLiaison ? 'Désactiver le mode liaison' : 'Activer le mode liaison' }}
    </button>
    <button @click="ajouterNoeud" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ajouter un nœud</button>
    <button @click="toggleModeSuppression" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      {{ modeSuppression ? 'Désactiver le mode suppression' : 'Activer le mode suppression' }}
    </button>
    <label for="symbol">Symbole de la molécule:</label>
    <select v-model="selectedSymbol" id="symbol">
      <option v-for="symbol in uniqueSymbols" :key="symbol" :value="symbol">{{ symbol }}</option>
    </select>
    <button @click="create" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">test</button>

    <div v-if="modeLiaison">
      <label for="typeLiaison">Type de liaison:</label>
      <select v-model="selectedType" id="typeLiaison">
        <option value="simple">Simple</option>
        <option value="double">Double</option>
        <option value="triple">Triple</option>
      </select>
    </div>
  </div>
</template>

<style>
  .node text {
    @apply select-none;
  }

  .draggable {
    cursor: grab;
  }

  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
</style>
