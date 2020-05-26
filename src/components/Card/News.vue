<template>
  <div class="col-md-4 mb-4">
    <div class="card news-card">
    <img class="card-img-top" :src="news.image_url" alt="Card image cap"  />
    <span class="news-source">Source: {{news.source}}</span>
    <br />
    <div class="card-body news-card__body">
      <h5 class="card-title">{{news.title}}</h5>
      <p class="card-text">{{news.summary}}</p>
      <a :href="news.url" class="btn btn-primary" target="_blank">Read More</a>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: ["news"]
};
</script>
