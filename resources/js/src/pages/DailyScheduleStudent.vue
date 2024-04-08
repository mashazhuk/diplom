<template>
  <WeekCalendar :lessons="lessons.value"/>
</template>

<script>
import WeekCalendar from '../components/WeekCalendarComponent.vue';
import axios from 'axios';

export default {
  components: {
    WeekCalendar
  },
  data() {
    return {
      lessons: []
    };
  },
  mounted() {
    axios.get('/api/lessons')
      .then(response => {
        this.lessons.value = response.data.data;
      })
      .catch(error => {
        console.error(error);
      });
      console.log(this.lessons);
  }
  }
</script>
