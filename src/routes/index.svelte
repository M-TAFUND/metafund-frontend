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
        {content_en.official_launch}
      </p>
      <p class="launch_soon">
        <b>{content_en.official_launch_2}</b>
      </p>
    </div>
  </div>
  <div class="box-3-4" />
</div>
<div class="container-3">
  <div class="box-1-3">
    <h3 class="h3_small_bigger">{content_en.mail_form}</h3>
  </div>
  <div class="box-2-3">
    <form
      action="mailto:jonsnowpt194@gmail.com
    "
      method="POST"
      target="_blank"
    >
      <input class="inputMailMeta" placeholder="your@email.com" type="email" />
      <input class="inputMailMetaSubmit" type="submit" value="Subscribe" />
    </form>
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
    overflow: hidden;
    position: fixed;
    flex-basis: 50%;
    align-items: flex-start;
    background-image: url("/assets/img/metafund_icon_illustration.svg");
    width: 1229px;
    height: 756.57px;
    transform: translateX(30%);
    display: inline-block;
    z-index: -1000000;
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
    padding-bottom: 150px;
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
    background-color: rgba(27, 8, 62, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .box-2-2 {
    padding-top: 52px;
    padding-bottom: 52px;
    flex-basis: 25%;
    background-color: rgba(27, 8, 62, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .box-3-3 {
    padding-top: 64px;
    padding-bottom: 52px;
    flex-basis: 49%;
    background-color: rgba(27, 8, 62, 0.3);
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
    line-height: 12px;
    text-align: center;
    justify-content: center;
    color: #d8d7dc;
    width: 362px;
    margin-right: auto;
    margin-left: auto;
  }

  /* THIRD BLOCK */

  .container-3 {
    margin: 0 auto;
    max-width: 1216px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    background-image: url("/assets/img/mail_background.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }

  .box-1-3 {
    padding-top: 34px;
    height: 700px;
    flex-basis: 40%;
  }

  .box-2-3 {
    padding-top: 58px;
    flex-basis: 50%;
  }

  .h3_small_bigger {
    width: 389px;

    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;

    color: #fcfcfc;
  }

  .inputMailMeta {
    /* Rectangle 1 */
    width: 95%;
    height: 64px;
    z-index: 9999999999999999;

    padding-left: 20px;
    font-family: "Sora";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #fcfcfc;

    /* shapes/background */

    background: #0d0427;
    opacity: 0.32;
    border-radius: 100px;
    border-color: #0d0427;
    color: #fcfcfc;
  }

  .inputMailMetaSubmit {
    /* Auto layout */
    position: absolute;
    margin-left: -150px;
    justify-content: center;
    align-items: center;
    padding: 14px 32px;
    gap: 8px;
    cursor: pointer;
    z-index: 9999999999999999999999999;

    width: 147px;
    height: 68px;

    font-family: "Sora";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    color: #fcfcfc;

    /* shapes/background */

    background: #0d0427;
    border-radius: 100px;
    border-color: #0d0427;
  }

  /* DESKTOP RESOLUTIONS */

  /* <---- 1228px */

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

    /* THIRD BLOCK */

    .container-3 {
      max-width: 1228px;
      background-size: cover;
    }

    .box-1-3 {
      height: 120px;
      flex-basis: 30%;
    }

    .box-2-3 {
      padding-top: 0px;
      height: 120px;
      flex-basis: 80%;
    }

    .h3_small_bigger {
      width: 350px;
      text-align: center;
    }
  }

  /* <---- 920px */

  @media only screen and (max-width: 920px) {
    /* FIRST BLOCK */

    .container-1 {
      max-width: 920px;
    }

    .box-1 {
      flex-basis: 95%;
    }

    .box-2 {
      flex-basis: 50%;
      position: fixed;
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
      max-width: 920px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      justify-items: center;
    }

    .box-1-2 {
      padding-top: 52px;
      padding-bottom: 52px;
      flex-basis: 32%;
      border-top: 1px solid rgba(255, 255, 255, 0.16);
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    .box-2-2 {
      padding-top: 52px;
      padding-bottom: 52px;
      flex-basis: 64%;
      border-top: 1px solid rgba(255, 255, 255, 0.16);
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    .box-3-3 {
      padding-top: 52px;
      padding-bottom: 52px;
      flex-basis: 95%;
      border-left: none;
      border-top: none;
      border-bottom: 0px;
    }

    .buy_button {
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      padding: 14px 32px;
      gap: 24px;
      border: none;

      width: 460px;
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
      margin-top: 0px;
    }

    .box-3-4 {
      margin-top: -100px;
      flex-basis: 100%;
      align-items: flex-start;
      background-image: url("/assets/img/metafund_icon_illustration.svg");
      width: 920px;
      height: 756.57px;
      transform: translateX(0%);
      background-position: center;
      display: inline-block;
    }

    /* THIRD BLOCK */

    .container-3 {
      margin: 0 auto;
      margin-top: -220px;
      max-width: 85%;
      background-size: cover;
    }

    .box-1-3 {
      height: 120px;
      flex-basis: 30%;
    }

    .box-2-3 {
      padding-top: 0px;
      height: 120px;
      flex-basis: 80%;
    }

    .h3_small_bigger {
      width: 350px;
      text-align: center;
    }

    .inputMailMeta {
      /* Rectangle 1 */
      width: 90%;
      height: 64px;
      z-index: 9999999999999999;
    }

    .inputMailMetaSubmit {
      /* Auto layout */
      position: absolute;
      margin-left: -115px;
      justify-content: center;
      align-items: center;
      padding: 14px 32px;
      gap: 8px;
      cursor: pointer;
      z-index: 9999999999999999999999999;

      width: 147px;
      height: 68px;

      font-family: "Sora";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;

      color: #fcfcfc;

      /* shapes/background */

      background: #0d0427;
      border-radius: 100px;
      border-color: #0d0427;
    }
  }

  /* <---- 695px */

  @media only screen and (max-width: 695px) {
    /* FIRST BLOCK */

    .container-1 {
      max-width: 695px;
    }

    .box-1 {
      flex-basis: 90%;
    }

    .box-2 {
      position: fixed;
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
      margin-top: -220px;
      max-width: 695px;
    }

    .box-1-2 {
      padding-top: 25px;
      padding-bottom: 25px;
      flex-basis: 50%;
    }

    .box-2-2 {
      padding-top: 20px;
      padding-bottom: 25px;
      flex-basis: 40%;
    }

    .box-3-3 {
      flex-basis: 85%;
      padding-bottom: 25px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    .buy_button {
      width: 210px;
    }

    .h3_small {
      width: 290px;
    }

    .launch_soon {
      width: 380px;
      margin-top: -10px;
      line-height: 20px;
    }

    .box-3-4 {
      margin-top: 0px;
      flex-basis: 100%;
      align-items: flex-start;
      background-image: url("/assets/img/metafund_icon_illustration.svg");
      width: 695px;
      height: 756.57px;
      transform: translateX(0%);
      background-position: center;
      display: inline-block;
    }

    /* THIRD BLOCK */

    .inputMailMetaSubmit {
      /* Auto layout */
      margin-left: -125px;
    }
  }

  /* MOBILE RESOLUTIONS */

  /* <---- 500px */

  @media only screen and (max-width: 500px) {
    /* FIRST BLOCK */

    .container-1 {
      max-width: 500px;
      flex-wrap: wrap;
    }

    .box-1 {
      flex-basis: 92%;
    }

    .MainTitle {
      margin-top: 130px;
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

    /* SECOND BLOCK */

    .container-2 {
      margin-top: -350px;
      max-width: 500px;
    }

    .box-1-2 {
      padding-top: 25px;
      padding-bottom: 25px;
      flex-basis: 40%;
    }

    .box-2-2 {
      padding-top: 20px;
      padding-bottom: 25px;
      flex-basis: 40%;
    }

    .box-3-3 {
      flex-basis: 82%;
      padding-bottom: 25px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
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

    .box-3-4 {
      margin-top: 0px;
      flex-basis: 100%;
      height: 357px;
      align-items: flex-start;
      background-image: url("/assets/img/metafund_icon_illustration.svg");
      background-size: 200%;
      background-position: center;
    }

    /* THIRD BLOCK */

    .container-3 {
      margin-top: -150px;
      max-width: 100%;
    }

    .box-1-3 {
      flex-basis: 78%;
    }

    .box-2-3 {
      height: 150px;
      flex-basis: 89%;
    }

    .h3_small_bigger {
      width: 268px;

      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
    }

    .inputMailMeta {
      /* Rectangle 1 */
      width: 93%;
      height: 48px;

      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
    }

    .inputMailMetaSubmit {
      /* Auto layout */
      margin-top: 10px;
      position: absolute;
      margin-left: 0;
      padding: 10px 32px;
      gap: 8px;

      width: 86%;
      height: 48px;

      font-size: 14px;
    }
  }

  /* <---- 375px */

  @media only screen and (max-width: 375px) {
    /* FIRST BLOCK */

    .container-1 {
      max-width: 375px;
    }

    .box-1 {
      flex-basis: 92%;
    }

    .MainTitle {
      margin-top: 110px;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
    }

    .SubTitle {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }

    /* SECOND BLOCK */

    .container-2 {
      margin-top: -350px;
      max-width: 375px;
    }

    .box-1-2 {
      padding-top: 25px;
      padding-bottom: 25px;
      flex-basis: 45%;
    }

    .box-2-2 {
      padding-top: 20px;
      padding-bottom: 25px;
      flex-basis: 45%;
    }

    .box-3-3 {
      flex-basis: 92%;
      padding-bottom: 25px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    .buy_button {
      width: 160px;
    }

    .h3_small {
      width: 150px;
    }

    .launch_soon {
      width: 300px;
      line-height: 22px;
      margin-top: -10px;
    }
  }

  /* <---- 320px */

  @media only screen and (max-width: 320px) {
    /* FIRST BLOCK */

    .container-1 {
      max-width: 320px;
    }

    .box-1 {
      flex-basis: 95%;
    }

    .MainTitle {
      margin-top: 100px;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
    }

    .SubTitle {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }

    /* SECOND BLOCK */

    .container-2 {
      margin-top: -350px;
      max-width: 320px;
    }

    .box-1-2 {
      padding-top: 25px;
      padding-bottom: 25px;
      flex-basis: 40%;
    }

    .box-2-2 {
      padding-top: 20px;
      padding-bottom: 25px;
      flex-basis: 40%;
    }

    .box-3-3 {
      flex-basis: 92%;
      padding-bottom: 25px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }

    .buy_button {
      width: 160px;
    }

    .h3_small {
      width: 130px;
    }

    .launch_soon {
      width: 290px;
      margin-top: -10px;
    }
  }
</style>
