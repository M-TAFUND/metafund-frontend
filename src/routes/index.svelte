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
  </div>
  <div class="container-2">
    <div class="box-1-2">
      <h3 class="h3_small">{content_en.mtf_presale}</h3>
    </div>
    <div class="box-2-2">
      <div><button class="buy_button">{content_en.buy_button}</button></div>
    </div>
  </div>
</main>

<!-- ===================
	COMPONENT STYLE  
=================== -->
<style>
  /* FIRST BLOCK */

  :root {
    background-color: #191032;
  }

  .container-1 {
    overflow: hidden;
    display: flex;
  }

  .box-1 {
    margin-left: auto;
    margin-right: auto;
    height: 700px;
    flex-basis: 50%;
    background-image: url("/assets/img/metafund_icon_illustration.svg");
    background-repeat: no-repeat;
  }

  .MainTitle {
    color: #fcfcfc;
    margin-top: 240px;
    width: 611px;
  }

  .SubTitle {
    font-family: "Sora";
    font-style: normal;
    color: #fcfcfc;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    width: 611px;
  }

  /* SECOND BLOCK */

  .container-2 {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-1-2 {
    margin-left: 12%;
    flex-basis: 50%;
  }

  .box-2-2 {
    flex-wrap: wrap;
    flex-basis: 50%;
  }

  .box-3-3 {
    flex-wrap: wrap;
    flex-basis: 50%;
  }

  .h3_small {
    width: 212px;
    left: 112px;
    padding-top: 20px;
    padding-bottom: 20px;

    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    color: #fcfcfc;
  }

  .buy_button {
    justify-content: center;
    align-items: center;
    padding: 14px 32px;
    gap: 24px;
    border: none;

    width: 169px;
    height: 56px;
    left: 404px;
    top: 622px;

    /* colors/violet */

    background: #6929f2;
    border-radius: 100px;

    font-family: "Sora";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    /* text/white */

    color: #fcfcfc;
  }

  /* DESKTOP RESOLUTIONS */

  /* Big Screems */

  @media only screen and (min-width: 1600px) {
    /* FIRST BLOCK */

    /* SECOND BLOCK */

    .container-2 {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .box-1-2 {
      margin-left: 25%;
      flex-basis: 25%;
      border-top: 1px solid rgba(255, 255, 255, 0.16);
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    .box-2-2 {
      flex-wrap: wrap;
      flex-basis: 50%;
      border-top: 1px solid rgba(255, 255, 255, 0.16);
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .box-3-3 {
      margin-right: 25%;
      flex-wrap: wrap;
      flex-basis: 50%;
      border-top: 1px solid rgba(255, 255, 255, 0.16);
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      padding-top: 26px;
      padding-bottom: 26px;
    }

    .h3_small {
    }
  }
</style>
