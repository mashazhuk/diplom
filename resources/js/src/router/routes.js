import Home from "@/pages/Home.vue";
import DailyScheduleStudent from "@/pages/DailyScheduleStudent.vue";
import DailyScheduleTeacher from "@/pages/DailyScheduleTeacher.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    
    {
        path: '/daily-sch-student',
        component: DailyScheduleStudent
    },

    {
        path: '/daily-sch-teacher',
        component: DailyScheduleTeacher
    }
];

export default routes;