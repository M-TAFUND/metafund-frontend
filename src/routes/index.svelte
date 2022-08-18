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
<div class="container-1">
  <div class="box-1">
    <h1 class="MainTitle">{content_en.title}</h1>
    <p class="SubTitle">{content_en.subtitle}</p>
  </div>
  <div class="box-2" />
</div>
<div class="container-2">
  <div class="box-1-2">
    <h3 class="h3_small">{content_en.mtf_presale}</h3>
  </div>
  <div class="box-2-2">
    <div><button class="buy_button">{content_en.buy_button}</button></div>
  </div>
  <div class="box-3-3">
    <div>
      <p class="launch_soon">
        The official launch date of MTF public presale will be available soon!
      </p>
    </div>
  </div>
</div>

<!-- ===================
	COMPONENT STYLE  
=================== -->
<style>
  /* FIRST BLOCK */

  :root {
    background-color: #191032;
  }

  .container-1 {
    margin: 0 auto;
    max-width: 1216px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    justify-items: center;
  }

  .box-1 {
    height: 700px;
    flex-basis: 100%;
  }

  .box-2 {
    height: 700px;
    flex-basis: 50%;
    align-items: flex-start;
    position: fixed;
    background-image: url("/assets/img/metafund_icon_illustration.svg");
    width: 1229px;
    height: 756.57px;
    transform: translateX(30%);
    display: inline-block;
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
    margin: 0 auto;
    max-width: 1216px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
  }

  .box-1-2 {
    padding-top: 52px;
    padding-bottom: 52px;
    flex-basis: 25%;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .box-2-2 {
    padding-top: 52px;
    padding-bottom: 52px;
    flex-basis: 25%;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .box-3-3 {
    padding-top: 52px;
    padding-bottom: 52px;
    flex-basis: 49%;
    border-left: 1px solid rgba(255, 255, 255, 0.16);
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .h3_small {
    width: 212px;
    left: 112px;

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
    margin-top: 20px;
    padding: 14px 32px;
    gap: 24px;
    border: none;

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

  .launch_soon {
    font-family: "Sora";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    justify-content: center;
    color: #d8d7dc;
    width: 362px;
    margin-right: auto;
    margin-left: auto;
  }

  /* DESKTOP RESOLUTIONS */

  /* <---- 1366px */

  @media only screen and (max-width: 1228px) {
    /* FIRST BLOCK */

    .box-1 {
      flex-basis: 100%;
    }

    .box-2 {
      flex-basis: 50%;
      align-items: flex-start;
      background-image: url("/assets/img/metafund_icon_illustration.svg");
      width: 1229px;
      height: 756.57px;
      transform: translateX(30%);
      display: inline-block;
    }
  }

  /* <---- 920px */

  @media only screen and (max-width: 920px) {
    /* FIRST BLOCK */

    .container-1 {
      max-width: 705px;
    }

    .box-1 {
      flex-basis: 97%;
    }

    .box-2 {
      flex-basis: 50%;
      align-items: flex-start;
      background-image: none;
    }

    .MainTitle {
      color: #fcfcfc;
      margin-top: 240px;
      align-items: center;
    }

    /* SECOND BLOCK */

    .container-2 {
      margin-top: -150px;
      max-width: 705px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      justify-items: center;
    }

    .box-1-2 {
      padding-top: 52px;
      padding-bottom: 52px;
      flex-basis: 35%;
      border-top: 1px solid rgba(255, 255, 255, 0.16);
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    .box-2-2 {
      padding-top: 52px;
      padding-bottom: 52px;
      flex-basis: 62.5%;
      border-top: 1px solid rgba(255, 255, 255, 0.16);
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    .box-3-3 {
      padding-top: 52px;
      padding-bottom: 52px;
      flex-basis: 85%;
      border-left: none;
      border-top: none;
      border-bottom: none;
    }

    .buy_button {
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      padding: 14px 32px;
      gap: 24px;
      border: none;

      width: 440px;
      height: 56px;

      /* colors/violet */

      background: #6929f2;
      border-radius: 100px;

      /* identical to box height, or 175% */

      /* text/white */

      color: #fcfcfc;
    }

    .h3_small {
      width: 220px;
      left: 112px;
    }

    .launch_soon {
      width: 380px;
      margin-top: -10px;
    }
  }

  /* <---- 695px */

  @media only screen and (max-width: 695px) {
    /* FIRST BLOCK */

    .container-1 {
      max-width: 620px;
    }

    .box-1 {
      flex-basis: 90%;
    }

    .MainTitle {
      margin-top: 160px;
      width: auto;
    }

    .SubTitle {
      width: auto;
    }

    /* SECOND BLOCK */

    .container-2 {
      margin-top: -110px;
      max-width: 620px;
    }

    .box-1-2 {
      padding-top: 52px;
      padding-bottom: 52px;
      flex-basis: 45%;
    }

    .box-2-2 {
      flex-basis: 35%;
    }

    .box-3-3 {
      flex-basis: 85%;
    }

    .buy_button {
      width: 210px;
    }

    .h3_small {
      width: 220px;
    }

    .launch_soon {
      width: 380px;
      margin-top: -10px;
    }

    /* MOBILE RESOLUTIONS */

    /* <---- 500px */

    @media only screen and (max-width: 500px) {
      /* FIRST BLOCK */

      .container-1 {
        max-width: 500px;
      }

      .box-1 {
        flex-basis: 92%;
      }

      .MainTitle {
        margin-top: 160px;
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        width: auto;
      }

      .SubTitle {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        width: auto;
      }
    }

    /* SECOND BLOCK */

    .container-2 {
      margin-top: -350px;
      max-width: 500px;
    }

    .box-1-2 {
      padding-top: 25px;
      padding-bottom: 25px;
      flex-basis: 46;
    }

    .box-2-2 {
      padding-top: 25px;
      padding-bottom: 25px;
      flex-basis: 46%;
    }

    .box-3-3 {
      flex-basis: 82%;
    }

    .buy_button {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 24px;
      gap: 24px;
      width: 140px;
      height: 48px;
      left: 203px;
      top: 350px;
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
    }

    .h3_small {
      width: 220px;
      font-family: "Sora";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
    }

    .launch_soon {
      width: 380px;
      margin-top: -10px;
    }

    /* <---- 320px */

    @media only screen and (max-width: 320px) {
      /* FIRST BLOCK */

      .box-1 {
        height: 700px;
        flex-basis: 95%;
      }

      .MainTitle {
        margin-top: 120px;
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        width: 280px;
      }

      .SubTitle {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        width: 250px;
      }
    }
  }
</style>
