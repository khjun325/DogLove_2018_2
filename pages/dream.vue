<template>

    <section class="section">
      <div class="hero is-dark">
        <div class="hero-body">
          <h1 class="title is-1">4. 목표 </h1>
          <br>
        </div>
      </div>
      <article class="message">
        <div class="message-header">향후계획 및 최종 목표</div>
      </article>
      <article class="columns is-mobile">
        <div class="column">
          <div class="notification">
            <div class="message-header">
              <div style="font-size:20pt"> 인생 그래프</div>
            </div>
            <template>
                    <div id="chart-area"></div>
                  </template>
          </div>
        </div>
      </article>
  
      <article class="columns is-mobile">
          <div class="column">
            <div class="notification">
              <div class="message-header">
                <div style="font-size:20pt"> 향후 계획</div>
              </div>
              <div class="message-body">
                <div style="font-size:15pt">
                        <table class="table is-striped is-bordered">
                                <tbody>
                                  <tr>
                                    <td>
                                      <center><strong>2020~2029</strong></center></td>
                                    <td>취직 및 개인 능력 향상</td>
                                  </tr>
                                  <tr>
                                      <td><center><strong>2030~2039</strong></center></td>
                                    <td>결혼하여 가정을 꾸리며 보안쪽으로 전향</td>
                                  </tr>
                                  <tr>
                                    <td><center><strong>2040~2049</strong></center></td>
                                    <td>해외로 뻗어 나가기 위한 준비 및 해외 진출</td>
                                  </tr>
                                  <tr>
                                    <td><center><strong>2050~2059</strong></center></td>
                                    <td>세계적으로 인정받는 보안 전문가</td>
                                  </tr>
                                  <tr>
                                    <td><center><strong>2060~</strong></center></td>
                                    <td>노후를 한적한 시골에서 보내기</td>
                                  </tr>
                                </tbody>
                              </table>
                </div>
              </div>
            </div>
          </div>
        </article>
        
  
      <article class="box">
        <center>
          <strong>
            My portfolio source in github
            <br>image click!</strong>
          <figure class="image is-128x128">
            <a href="https://github.com/khjun325">
              <img src="../static/github.png">
            </a>
          </figure>
        </center>
      </article>
    </section>
  </template>

      <script>
        import myChart from '~/plugins/myBarChart';
        export default {
              mounted() {
                  if (process.client) { myChart('chart-area'); }
             }
        };
      </script>
  