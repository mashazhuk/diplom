import Home from "@/pages/Home.vue";
import WeekScheduleStudent from "@/pages/WeekScheduleStudent.vue";
import DailyScheduleTeacher from "@/pages/DailyScheduleTeacher.vue";
import Login from "@/pages/Login.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    
    {
        path: '/week-sch-student',
        component: WeekScheduleStudent
    },

    {
        path: '/daily-sch-teacher',
        component: DailyScheduleTeacher
    },

    {
        path: '/login',
        component: Login
    }
];

export default routes;