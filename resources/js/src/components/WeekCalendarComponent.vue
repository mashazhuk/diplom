<template>
    <h3>{{ month }}</h3>
    <div class="sch-wrapper">
        <div class="day-of-week" v-for="(day, index) in week" :key="index">
            <div class="dayName">
                <p class="weekday">{{ day.toLocaleString('uk-UA', {weekday: 'short'})}}</p>
                <h3 class="day">{{ day.getDate() }}</h3>
            </div>
            <div v-for="(lesson, idx) in lessons" :key="idx">
                <div class="content" @click="openModal(lesson)">
                    <p class="lesson-name">{{ lesson.name }}</p>
                </div>
                <eventModal v-if="showModal" @close="showModal = false" :show="showModal" :lesson="selectedLesson"></eventModal>
            </div>
        </div>
    </div>
</template>

<script>
import eventModal from './EventModalStudent.vue';
export default {
        components: {
            eventModal
        },
        name: 'WeekCalendar',
        data() {
            return {
                lessonStatus: false,
                selectedLesson: {},
                week: this.getWeek(),
                month: this.getMonthName(),
                showModal: false
            }
        },

        props: {
            lessons: Array,
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
                return week;
            },
            getMonthName() {
                let date = new Date();
                let month = date.toLocaleString('uk-UA', { month: 'long' });
                return month;
            },
            openModal(lesson) {
                this.selectedLesson = lesson;
                this.showModal = true;
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

.content {
    background-color: blue;
    color: white;
    cursor: pointer;
}

p {
    margin-bottom: 0.5rem;
}

</style>
