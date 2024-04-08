<template>
  <WeekCalendar :lessons="myLessons"/>
</template>

<script>
import WeekCalendar from '../components/WeekCalendarComponent.vue';

export default {
  components: {
    WeekCalendar
  },
  data() {
    return {
      myLessons: [
        {
          name: 'OOP',
          place: 1234562,
          password: 'Gehq232'
        },
        {
          name: 'Such movy',
          place: 738253,
          password: 'JfKdg237'
        }
      ]
  }
}
}
</script>
