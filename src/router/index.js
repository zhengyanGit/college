import Vue from 'vue'
import Router from 'vue-router'

//框架页面
import FrontPage from '@/FrontPage'
import PlatformPage from '@/PlatformPage'
import SinglePage from '@/SinglePage' // 欢迎页

//spa页面
import HomePage from '@/views/spa/Homepage'
import LoginPage from '@/views/spa/LoginPage'
import RegisterPage from '@/views/spa/RegisterPage'
import NotFindePage from '@/views/spa/404'

//学校名录
import SchoolIndexPage from '@/views/school/SchoolIndexPage'  // 高招数据
import SchoolListPage from '@/views/school/children/SchoolListPage'  //院校名录
import SchoolMajorPage from '@/views/school/children/SchoolMajorPage'  //专业介绍

import SchollDetailsPage from '@/views/school/SchollDetailsPage'
import SchollDetailsIntroPage from '@/views/school/details/SchollDetailsIntroPage' // 详情-简介
import SchollDetailsFacultyPage from '@/views/school/details/SchollDetailsFacultyPage' //详情 - 院系

//志愿填报
import ReportedListPage from '@/views/reported/ReportedListPage'

//专业测评
import AppraisalIndexPage from '@/views/appraisal/AppraisalIndexPage'

//新高考 
import EntranceListPage from '@/views/entrance/EntranceListPage' //政策解读
import SpecialtyListPage from '@/views/entrance/SpecialtyListPage' //选科

//自主招生
import RecruitListPage from '@/views/recruit/RecruitListPage' //院校专业列表

//社区
import CommunityInfoPage from '@/views/community/CommunityInfoPage' //资讯

import list from '@/views/user-info/list' //

//后台页面
import WelcomePage from '@/views/platform/WelcomePage' // 欢迎页
import ReleasePage from '@/views/platform/ReleasePage' // 资讯发布



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'FrontPage',
        component: FrontPage,
        children: [{
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        { // 高校数据-列表
            path: '/school',
            name: 'SchoolIndexPage',
            component: SchoolIndexPage,
            children: [
                {// 院校名录
                    path: '/school/list',
                    name: 'SchoolListPage',
                    component: SchoolListPage,
                },
                {
                    path: '/school/major',
                    name: 'SchoolMajorPage',
                    component: SchoolMajorPage
                }
            ]
        },
        { // 高校数据-详情
            path: '/school/details/:id',
            name: 'SchollDetailsPage',
            component: SchollDetailsPage,
            children: [{
                path: '',
                name: 'SchollDetailsIntroPage',
                component: SchollDetailsIntroPage,
            }, {
                path: 'faculty',
                name: 'SchollDetailsFacultyPage',
                component: SchollDetailsFacultyPage,
            }]
        },
        { // 志愿填报
            path: '/reported/list',
            name: 'ReportedListPage',
            component: ReportedListPage,
        },
        { // 专业测评
            path: '/appraisal',
            name: 'AppraisalIndexPage',
            component: AppraisalIndexPage,
        },
        { // 政策解读
            path: '/entrance',
            name: 'EntranceListPage',
            component: EntranceListPage,
        },
        { // 选科
            path: '/entrance/specialty',
            name: 'SpecialtyListPage',
            component: SpecialtyListPage,
        },
        { //自主招生
            path: '/recruit/list',
            name: 'RecruitListPage',
            component: RecruitListPage
        },
        { //社区
            path: '/community/info',
            name: 'CommunityInfoPage',
            component: CommunityInfoPage
        }
        ]
    },
    {
        path: '/platform',
        name: 'PlatformPage',
        component: PlatformPage,
        children: [{
            path: '/',
            name: 'WelcomePage',
            component: WelcomePage
        },
        {
            path: 'release',
            name: 'ReleasePage',
            component: ReleasePage
        }
        ]
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    },
    {
        path: '*',
        name: 'NotFindePage',
        component: NotFindePage
    },
    { //动态路由
        path: '/list/:listid',
        name: 'list',
        component: list
    }
    ]
})