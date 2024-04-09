<template>
    <div v-for="(lesson, idx) in lessons" :key="idx">
        <div class="content" @click="openModal(lesson)">
            <p class="lesson-name">{{ lesson.lesson_name }}</p>
        </div>
    <eventModal v-if="showModal" @close="showModal = false" :show="showModal" :lesson="selectedLesson"></eventModal>
    </div>
</template>

<script>
import eventModal from './EventModalStudent.vue';
export default {
    components: {
        eventModal
    },
    name: 'WeekLesson',
    data() {
        return {
            selectedLesson: {},
            showModal: false,
        }
    },

    props: {
        lessons: Array,
    },

    methods: {
        openModal(lesson) {
            this.selectedLesson = lesson;
            this.showModal = true;
            console.log(this.selectedLesson)
        }
    }
}
</script>

<style scoped>
.content {
    background-color: blue;
    color: white;
    cursor: pointer;
}

p {
    margin-bottom: 0.5rem;
}
</style>
