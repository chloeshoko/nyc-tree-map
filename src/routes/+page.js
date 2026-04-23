import greatTrees from '$lib/data/great-trees.json';

export function load() {
  return {
    showHeader: true,
    showFooter: true,
    greatTrees,
  };
}