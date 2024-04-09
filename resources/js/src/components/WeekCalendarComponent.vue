<template>
    <h3>{{ month }}</h3>
    <div class="sch-wrapper">
        <div class="day-of-week" v-for="(day, index) in week" :key="index">
            <div class="dayName">
                <p class="weekday">{{ day.toLocaleString('uk-UA', {weekday: 'short'})}}</p>
                <h3 class="day">{{ day.getDate() }}</h3>
            </div>
            <WeekLesson :lessons="lessons.value"/>
        </div>
    </div>
</template>

<script>
import WeekLesson from './WeekLesson.vue';

export default {
        components: {
            WeekLesson
        },
        name: 'WeekCalendar',
        data() {
            return {                
                week: this.getWeek(),
                month: this.getMonthName(),
                showModal: false,
                lessons: []
            }
        },
        mounted() {
            this.getLessons();
        },
        methods: {
            getWeek() {
                let week = [];
                let current = new Date();
                let first = current.getDate() - current.getDay() + (current.getDay() === 0 ? -6 : 1);
                for (let i = 0; i < 6; i++) {
                    let day = new Date(current.setDate(first + i));
                    week.push(day);
                }
                console.log(week);
                return week;
            },
            getMonthName() {
                let date = new Date();
                let month = date.toLocaleString('uk-UA', { month: 'long' });
                return month;
            },
            getLessons() {
                axios.get('/api/lessons')
                    .then(response => {
                        this.lessons.value = response.data.data;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    }
</script>

<style scoped>
.sch-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.day-of-week {
    flex: 1 0 0;
    border-right: 1px solid grey;
    padding: 10px;
    box-sizing: border-box;
    min-width: 150px;
}
.weekday {
    text-transform: capitalize;
}

.dayName {
    border-bottom: 1px solid grey;
}

p {
    margin-bottom: 0.5rem;
}

</style>
