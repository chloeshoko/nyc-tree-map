<script>
  import ArticleHeader from '$lib/components/Article/ArticleHeader.svelte';
  import Map from '$lib/components/Maps/Map.svelte';
  import MapLayer from '$lib/components/Maps/MapLayer.svelte';
  import Geocoder from '$lib/components/Maps/Geocoder.svelte';

  let { data } = $props();
  const greatTrees = data.greatTrees;
  let longitude = $state(-74.0);
  let latitude = $state(40.7);
  let zoom = $state(9.5);
</script>

<div class="container">
  <ArticleHeader
    headline="The Great Trees of New York"
    byline="NYCity News Service"
    pubDate="2026-04-20"
  />

  <p>
    In 1985, the New York City Parks Department began an ambitious new venture.
    They called it the Great Tree Search.
  </p>

 <p>
    The agency called on the public to nominate "trees of unusual size, species,
    form or historical association." Explore them here and see if you can find any near you.
  </p>

  <Geocoder
    label="Find your neighborhood"
    placeholder="Enter an address in New York…"
    onresult={(result) => {
      longitude = result.lng;
      latitude = result.lat;
      zoom = 15;
    }}
  />

  <Map
    {longitude}
    {latitude}
    {zoom}
    height={600}
    theme="positron"
    credit="OpenFreeMap / OpenStreetMap contributors"
  >
    <!-- the MapLayer you added earlier stays as-is -->
  </Map>

</div>