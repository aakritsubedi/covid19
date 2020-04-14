<template>
  <div class="container-fluid text-left mt-3">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home">Symptoms</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu1">Precautions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu2">Treatment</a>
      </li>
    </ul>
    <!-- Tab Content -->
    <div class="tab-content mt-3">
      <div class="tab-pane container active" id="home">
        <h3>Symptoms of Covid19</h3>
        <p>People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment.</p>
        <p>More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.</p>
        <p>People may experience:</p>
        <ul>
          <li>cough</li>
          <li>fever</li>
          <li>tiredness</li>
          <li>difficulty breathing (severe cases)</li>
        </ul>
        <a id="learn-more"
          href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
        >Learn more at who.int</a>
      </div>
      <div class="tab-pane container fade" id="menu1">
        <h3>Preventions</h3>
        <p>There’s currently no vaccine to prevent coronavirus disease (COVID-19).</p>
        <p>You can protect yourself and help prevent spreading the virus to others if you:</p>
        <span class="font-weight-bold">Do</span>
        <ul>
          <li>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</li>
          <li>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</li>
          <li>Avoid close contact (1 meter or 3 feet) with people who are unwell</li>
          <li>Stay home and self-isolate from others in the household if you feel unwell</li>
        </ul>
        <span class="font-weight-bold">Don't</span>
        <ul>
          <li>Touch your eyes, nose, or mouth if your hands are not clean</li>
        </ul>
        <a id="learn-more"
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
          target="_blank"
        >Learn more at who.int</a>
      </div>
      <div class="tab-pane container fade" id="menu2">
        <h3>Treatment</h3>
        <p>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe.</p>
        <span class="font-weight-bold">Self care</span>
        <p>If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if you:</p>
        <ul>
          <li>rest and sleep</li>
          <li>keep warm</li>
          <li>drink plenty of liquids</li>
          <li>use a room humidifier or take a hot shower to help ease a sore throat and cough</li>
        </ul>
        <a id="learn-more" href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=protect" target="_blank">learn more at who.int</a>
        <hr>
        <span class="font-weight-bold">Medical treatments</span>
        <p>
          If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.
        </p>
        <a id="learn-more" href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=treatment" target="_blank">learn more at who.int</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
  #learn-more::before{
    content: "Read this: ";
    color: #3a3a3a;
  }
  #learn-more {
    border: 1px solid #3a3a3a;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 5px;
    margin: 10px 0;
  }
  .nav-item a {
    color: #777777;
    font-size: 18px;
  }
</style>