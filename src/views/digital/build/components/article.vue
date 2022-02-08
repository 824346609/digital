<template>
        <div class="build_artical">
        <div class="artical_container">
          <div class="artical_title artical">
            <div class="title_container">
              <div class="title_log"></div>
            </div>
            <div class="title_content">
              学党史坚定革命信念，办实事践行为民初心
            </div>
          </div>
          <div class="artical_date artical"><div>2022-01-12</div></div>
          <div class="artical_content artical">
            <div>学党史坚定革命信念，办实事践行为民初心/学习城市历史 勇担发展重任/一、学党史、悟思想、办实事、开新局/践行初心使命 融入新发展格局/勇担新使命 奋楫再出发</div>
            <div>学党史坚定革命信念，办实事践行为民初心/学习城市历史 勇担发展重任/一、学党史、悟思想、办实事、开新局/践行初心使命 融入新发展格局/勇担新使命 奋楫再出发</div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
   name: "art"
}
</script>
<style lang="scss" scoped>
.build_artical {
  position: relative;
  width: 100%;
  height: 80%;
  .artical_container {
    position: relative;
    width: 70%;
    height: 40%;
    left: 15%;
    top: 25%;
    box-shadow: 5px 5px 20px 5px grey;
  }
  .artical {
    position: relative;
    display: inline-flex;
  }
  .artical_title{
    width: 95%;
    top: 8%;
  }
  .artical_date {
    border-bottom: 1px solid red;
  }
  .artical_content {
    flex-wrap: wrap;
    div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .artical_title, .artical_date, .artical_content {
    left: 1%;
    top: 3%;
  }
  .title_container {
    flex: 2;
  }
  .title_content {
    flex: 25;
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1px 0 0 5px;
  }
  .title_log {
    background: url("../../../../assets/build/transparent.png");
    background-size: contain;
    width: 100%;
    background-repeat: no-repeat;
    height: 95%;
    background-position: center;
  }
  // @media screen and (min-width: 960px) {
    .artical_title {
      left: 1%;
      top: 8%;
      width: 99%;
    }
    .artical_date {
      left: 5.5%;
      font-size: 16px;
      letter-spacing: 2px;
    }
    .title_content {
      padding-top: 5px;
      font-size: 26px;
    }
    .title_container {
      flex: 1;
    }
    .artical_content {
      left: 5.5%;
      font-size: 16px;
      width: 94%;
      div {
        padding: 3px 0px;
      }
    }
  // }
  // @media screen and (max-width:960px) {
  //   .artical_title {
  //     left: 1%;
  //     top: 8%;
  //     width: 99%;
  //   }
  //   .artical_date { 
  //     top: 8%;
  //     left: 5.5%;
  //     font-size: .6rem;
  //   }
  //   .title_content {
  //     padding-top: 5px;
  //     font-size: .8rem;
  //   }
  //   .title_container {
  //     flex: 1;
  //   }
  //   .artical_content {
  //     left: 5.5%;
  //     font-size: .5rem;
  //     top: 10%;
  //     width: 91.5%;
  //     div {
  //       padding: 5px 0px;
  //     }
  //   }
  // }
}
</style>