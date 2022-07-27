<!-- ===================
	COMPONENT JS - BASIC 
=================== -->
<script>
  //	import DefaultPage from '$lib/components/default/default.svelte';
  // import { Default } from '$lib/components/default/default.svelte';
  import contentJson from "$lib/content_en.json";
  import "../styles/global.css";

  let content_en = contentJson;
</script>

<!-- ===================
	COMPONENT HTML 
=================== -->
<main>
  <div class="container-1">
    <div class="box-1">
      <h1 class="MainTitle">{content_en.title}</h1>
      <p class="SubTitle">{content_en.subtitle}</p>
    </div>
    <div class="box-2">
      <p />
    </div>
  </div>
</main>

<!-- ===================
	COMPONENT STYLE  
=================== -->
<style>
  :root {
    background-color: #191032;
  }

  .container-1 {
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  .box-1 {
    height: 700px;
    margin-left: 12%;
    flex-basis: 100%;
  }

  .box-2 {
    flex-wrap: wrap;
    height: 700px;
    margin-left: -800px;
    flex-basis: 100%;
    background-image: url("/assets/img/metafund_icon_illustration.svg");
    background-position: left;
    background-repeat: no-repeat;
  }

  .MainTitle {
    color: #fcfcfc;
    margin-top: 240px;
    padding-right: 400px;
  }

  .SubTitle {
    font-family: "Sora";
    font-style: normal;
    color: #fcfcfc;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    padding-right: 500px;
  }

  /* DESKTOP RESOLUTIONS */

  /* Big Screems */

  @media only screen and (min-width: 1600px) {
    .box-1 {
      margin-left: 25%;
    }
    .box-2 {
      margin-left: -1200px;
    }

    .MainTitle {
      padding-right: 800px;
    }

    .SubTitle {
      padding-right: 850px;
    }
  }
</style>
