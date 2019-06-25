<template>
  <div>
    <header class="first-header">
      <a href id="characteristic">QG特色</a>
      <a href id="importantEvent">QG大事件</a>
    </header>
    <main>
      <h1 class="second-header">QG特色</h1>
      <section class="part-1">
        <div class="card">
          <div class="card-left">
            <div class="content-container">
              <div class="no">01</div>
              <h2>暑期训练营</h2>
              <div
                class="introduce-container"
              >这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容</div>
            </div> 
          </div>
          <div class="card-right">
            <div class="img-container">
               <img src="../assets/images/2.jpg" alt>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-left">
            <div class="img-container">
               <img src="../assets/images/2.jpg" alt>
            </div>
          </div>
          <div class="card-right">
            <div class="content-container">
              <div class="no">02</div>
              <h2>技术交流会</h2>
              <div
                class="introduce-container"
              >这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-left">
            <div class="content-container">
              <div class="no">03</div>
              <h2>康乐活动</h2>
              <div
                class="introduce-container"
              >这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容</div>
            </div>
          </div>
          <div class="card-right">
            <div class="img-container">
               <img src="../assets/images/2.jpg" alt>
            </div>
          </div>
        </div>
      </section>
      <h1 class="second-header">QG大事件</h1>
      <section class="part-2">
        <div class="part-2-left">
          <div class="card-2">
            <div class="card-2-img-container">
              <img src="../assets/images/2.jpg" alt>
            </div>
            <div class="time-container">
              2005.X.X
            </div>
            <div class="part-2-content-container">
              <p>这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容</p>
            </div>
          </div>
          <div class="card-2">
            <div class="card-2-img-container">
              <img src="../assets/images/2.jpg" alt>
            </div>
            <div class="time-container">
              2005.X.X
            </div>
            <div class="part-2-content-container">
              <p>这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容</p>
            </div>
          </div>
          <div class="card-2">
            <div class="card-2-img-container">
              <img src="../assets/images/2.jpg" alt>
            </div>
            <div class="time-container">
              2005.X.X
            </div>
            <div class="part-2-content-container">
              <p>这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容</p>
            </div>
          </div>
        </div>
        <div class="timeline-container">
          <div class="start"></div>
          <div class="line"></div>
          <div class="arrow">
        <img src="../assets/icons/up.png" alt>

          </div>
        </div >
        <div class="part-2-right">
          <div class="card-2">
            <div class="card-2-img-container">
              <img src="../assets/images/2.jpg" alt>
            </div>
            <div class="time-container">
              2005.X.X
            </div>
            <div class="part-2-content-container">
              <p>asdasd asd as</p>
            </div>
          </div>
          <div class="card-2">
            <div class="card-2-img-container">
              <img src="../assets/images/2.jpg" alt>
            </div>
            <div class="time-container">
              2005.X.X
            </div>
            <div class="part-2-content-container">
              <p>这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <p>QG十五年，从未停步</p>
      <div class="backtotop-button">
        <img src="../assets/icons/up.png" alt>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: "column",
  data: {}
};
</script >

<style lang="css" scoped>
.first-header {
  border: 0.02rem solid #e5e5e5;
  padding: 0.15rem 0;

}
.first-header a {
  color: #2a2a2a;
  font-size: 0.23rem;
  padding: 0 0.2rem;
}
.second-header {
  margin-top: 0.96rem;
  margin-bottom: 1.08rem;
}
.card {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.94rem;
}
.card-left {
  margin-right: 0.54rem;
}
.card-right {
  margin-left: 0.54rem;
  margin-top: .48rem;
}
.top {
  margin-top: .48rem;

}
.img-container img {
  width: 8rem;
  height: 4.5rem;
}
.content-container {
  text-align: left;
}
.content-container h2 {
  color: #2a2a2a;
  font-size: 0.48rem;
  text-align: left;
  font-weight: 500;
  line-height: 2em;
}
.introduce-container {
  font-size: 0.24rem;
  color: #707070;
  width: 6.72rem;
  line-height: 1.8em;
}

.no {
  line-height: 1em;
  font-size: 0.96rem;
  color: transparent;
  -webkit-text-stroke: 0.03rem #b6aac5;
}
.second-header {
  color: #2a2a2a;
  font-size: 0.96rem;
}

.footer {
  color: #2a2a2a;
  font-size: 0.48rem;
  letter-spacing: 0.03rem;
}
.footer p {
  margin-top: .49rem;
}
.backtotop-button {
  margin: 2rem auto .5rem auto;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  box-shadow: 1px 2px 6px 1px #c7c1c1;
}



.part-2 {

  display: flex;
  justify-content: center;
  height: auto;
}
.timeline-container {
  height: 100%;
  margin: 0 .5rem;

}
.start {
  height: .36rem;
  width: .36rem;
  background-color: #5b08c3;
  border-radius: 50%;
  
}
.line {
  height: 21.45rem;
  background-color: #707070;
  width: .04rem;
  margin: 0 auto;

}

.arrow img{
  height: .36rem;
  width: .36rem;
  transform: rotateZ(180deg);
  margin-top: -1px;
}

.card-2 {
  box-shadow: 0 .06rem .12rem 0 #ded5d5;
  width: 7.2rem;
  height: 4.8rem;
  overflow: hidden;
}
.card-2-img-container img{
  width: 7.2rem;
  height: 2.8rem;
}
.time-container {
  width: 2rem;
  height: .48rem;
  background-color: #5a0bc3;
  margin: .16rem 0;
  box-shadow: 0 .05rem .06rem 0 #b5b0b0;
  color: #fff;
  font-size: .24rem;
  line-height: .48rem;
}
.part-2-content-container {
  padding-top: 0;
  height: 1rem;
  overflow: hidden;
  padding: 0 .3rem;
}
.part-2-content-container p {
  font-size: .32rem;
  color: #2a2a2a;
  text-align: left;
  width: 100%;  
}
.part-2-left {
  margin-top: 1.5rem;
}
.part-2-left .card-2 {
  margin-bottom: 2rem;
}
.part-2-right {
  margin-top: 2.5rem;
}
.part-2-right .card-2 {
  margin-bottom: 3rem;

}
</style>

