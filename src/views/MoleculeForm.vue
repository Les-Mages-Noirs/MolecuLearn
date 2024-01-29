<script setup lang="ts">

import { Molecule } from '../api/types';
import ShowMolecule from '../components/Cards/ShowMolecule.vue';
import MoleculeCreator from '../components/MoleculeCreator.vue';

const molecule: Molecule = {
  '@context': 'http://example.com/context',
  '@id': 'http://example.com/molecule/co2',
  '@type': 'Molecule',
  id: 1,
  name: 'Dioxyde de carbone',
  connections: [
    {
      '@type': 'Connection',
      '@id': 'http://example.com/connection/1',
      id: 1,
      atom1: {
        '@type': 'AtomNode',
        '@id': 'http://example.com/atomnode/1',
        id: 1,
        atom: {
          '@type': 'Atom',
          '@id': 'http://example.com/atom/c',
          id: 1,
          atomicNumber: 6,
          symbol: 'C',
          name: 'Carbon',
          fusionPoint: 3823,
          boilingPoint: 4098,
          atomicMass: 12.011,
          volumicMass: 2.267,
          discovery: 0,
          discoverer: 'Ancient'
        }
      },
      atom2: {
        '@type': 'AtomNode',
        '@id': 'http://example.com/atomnode/2',
        id: 2,
        atom: {
          '@type': 'Atom',
          '@id': 'http://example.com/atom/o1',
          id: 2,
          atomicNumber: 8,
          symbol: 'O',
          name: 'Oxygen',
          fusionPoint: 54.36,
          boilingPoint: 90.188,
          atomicMass: 15.999,
          volumicMass: 0.001429,
          discovery: 1774,
          discoverer: 'Joseph Priestley'
        }
      },
      value: 2, // 2 atomes d'oxygène
      molecule: 'http://example.com/molecule/co2'
    },
    {
      '@type': 'Connection',
      '@id': 'http://example.com/connection/2',
      id: 2,
      atom1: {
        '@type': 'AtomNode',
        '@id': 'http://example.com/atomnode/1',
        id: 1,
        atom: {
          '@type': 'Atom',
          '@id': 'http://example.com/atom/c',
          id: 1,
          atomicNumber: 6,
          symbol: 'C',
          name: 'Carbon',
          fusionPoint: 3823,
          boilingPoint: 4098,
          atomicMass: 12.011,
          volumicMass: 2.267,
          discovery: 0,
          discoverer: 'Ancient'
        }
      },
      atom2: {
        '@type': 'AtomNode',
        '@id': 'http://example.com/atomnode/3',
        id: 3,
        atom: {
          '@type': 'Atom',
          '@id': 'http://example.com/atom/o2',
          id: 3,
          atomicNumber: 8,
          symbol: 'O',
          name: 'Oxygen',
          fusionPoint: 54.36,
          boilingPoint: 90.188,
          atomicMass: 15.999,
          volumicMass: 0.001429,
          discovery: 1774,
          discoverer: 'Joseph Priestley'
        }
      },
      value: 2, // 2 atomes d'oxygène
      molecule: 'http://example.com/molecule/co2'
    }
  ]
};

</script>

<template>
    <MoleculeCreator :molecule="molecule"/>
</template>
