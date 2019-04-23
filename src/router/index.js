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
import SchoolIndexPage from '@/views/school/SchoolIndexPage' // 高招数据
import SchoolListPage from '@/views/school/children/SchoolListPage' //院校名录
import SchoolMajorPage from '@/views/school/children/SchoolMajorPage' //专业介绍
import SchoolScorePage from '@/views/school/children/SchoolScorePage' //院校分数查询
import SchoolSegmentPage from '@/views/school/children/SchoolSegmentPage' //一分一段查询
import SchoolBatchPage from '@/views/school/children/SchoolBatchPage' //批次线查询

import SchoolDetailsPage from '@/views/school/children/school-details/SchoolDetailsPage' //院校详情架子
import SchoolDetailsIntroPage from '@/views/school/children/school-details/SchoolDetailsIntroPage' // 院系简介
import SchoolDetailsSettingPage from '@/views/school/children/school-details/SchoolDetailsSettingPage' //院系设置
import SchoolDetailsMajorPage from '@/views/school/children/school-details/SchoolDetailsMajorPage' //专业介绍
import SchoolDetailsEnrollPage from '@/views/school/children/school-details/SchoolDetailsEnrollPage' //录取数据
import SchoolDetailsStudentPage from '@/views/school/children/school-details/SchoolDetailsStudentPage' //招生章程
import SchoolDetailsOwnPage from '@/views/school/children/school-details/SchoolDetailsOwnPage' //自主招生
import SchoolDetailsFiercePage from '@/views/school/children/school-details/SchoolDetailsFiercePage' //牛人帮

import SchoolDetailsMajorIndexPage from '@/views/school/children/major/IndexPage' //专业介绍详情架子
import SchoolMajorInfoPage from '@/views/school/children/major/SchoolMajorInfoPage' //专业介绍-简介
import SchoolMajorSettingPage from '@/views/school/children/major/SchoolMajorSettingPage' //专业介绍-开设院校
import SchoolMajorFiercePage from '@/views/school/children/major/SchoolMajorFiercePage' //专业介绍-牛人帮



//志愿填报
import ReportedIndexPage from '@/views/reported/ReportedIndexPage'  //架子
import ReportedSimulationPage from '@/views/reported/ReportedSimulationPage' //志愿填报-志愿填报模拟
import ReportedBuyPage from '@/views/reported/buyPage' //志愿填报购买

//专业测评
import AppraisalIndexPage from '@/views/appraisal/AppraisalIndexPage' // 架子
import AppraisalBuyPage from '@/views/appraisal/children/BuyPage' // 购买页
import AppraisalTestStepPage from '@/views/appraisal/children/TestStep' // 测试步骤1
import AppraisalTestStep2Page from '@/views/appraisal/children/TestStep2' // 测试步骤1

//新高考 
import EntranceListPage from '@/views/entrance/EntranceListPage' //政策解读
import SpecialtyListPage from '@/views/entrance/SpecialtyListPage' //选科

//自主招生
import RecruitIndexPage from '@/views/recruit/RecruitIndexPage' //自主招生架子
import RecruitListPage from '@/views/recruit/children/RecruitListPage' //院校专业列表
import RecruitOneselfPage from '@/views/recruit/children/RecruitOneselfPage' //自招数据查询
import RecruitStudentPage from '@/views/recruit/children/RecruitStudentPage' //自主招生1对1

//社区
import CommunityInfoPage from '@/views/community/CommunityInfoPage' //资讯

import list from '@/views/user-info/list' //  临时

//后台页面
import WelcomePage from '@/views/platform/WelcomePage' // 欢迎页
import ReleasePage from '@/views/platform/ReleasePage' // 资讯发布



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: FrontPage,
        children: [{
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        { // 高校数据-列表
            path: '/school',
            component: SchoolIndexPage,
            children: [{ // 院校名录
                path: '',
                component: SchoolListPage,
            },
            { // 院校名录
                path: 'list',
                name: 'SchoolListPage',
                component: SchoolListPage,
            },
            { //专业介绍
                path: 'major',
                name: 'SchoolMajorPage',
                component: SchoolMajorPage
            }, { //院校分数查询
                path: 'score',
                name: 'SchoolScorePage',
                component: SchoolScorePage
            }, { //一分一段查询
                path: 'segment',
                name: 'SchoolSegmentPage',
                component: SchoolSegmentPage
            }, { // 批次线查询
                path: 'batch',
                name: 'SchoolBatchPage',
                component: SchoolBatchPage
            }
            ]
        },
        {  // 高招数据-专业详情
            path: '/school/major/:detailId',
            component: SchoolDetailsMajorIndexPage,
            children: [
                { // 专业介绍
                    path: '',
                    component: SchoolMajorInfoPage,
                },
                { // 专业介绍
                    path: 'info',
                    name: 'SchoolMajorInfoPage',
                    component: SchoolMajorInfoPage,
                },
                {
                    path: 'setting',  //开设院校
                    name: 'SchoolMajorSettingPage',
                    component: SchoolMajorSettingPage,

                },
                {
                    path: 'fierce',  //牛人帮
                    name: 'SchoolMajorFiercePage',
                    component: SchoolMajorFiercePage,

                }
            ]
        },
        { // 高校数据-详情
            path: '/school/details/:detailId',
            component: SchoolDetailsPage,
            children: [{ // 院校简介
                path: '',
                component: SchoolDetailsIntroPage,
            }, { // 院校简介
                path: 'intro',
                name: 'SchoolDetailsIntroPage',
                component: SchoolDetailsIntroPage,
            }, {
                path: 'setting', //院系设置
                name: 'SchoolDetailsSettingPage',
                component: SchoolDetailsSettingPage,
            }, {
                path: 'major', //专业介绍
                name: 'SchoolDetailsMajorPage',
                component: SchoolDetailsMajorPage,
            }, {
                path: 'enroll', //录取数据
                name: 'SchoolDetailsEnrollPage',
                component: SchoolDetailsEnrollPage,
            }, {
                path: 'student', //招生章程
                name: 'SchoolDetailsStudentPage',
                component: SchoolDetailsStudentPage,
            }, {
                path: 'own', //自主招生
                name: 'SchoolDetailsOwnPage',
                component: SchoolDetailsOwnPage,
            }, {
                path: 'fierce', //牛人帮
                name: 'SchoolDetailsFiercePage',
                component: SchoolDetailsFiercePage,
            }]
        },
        { // 志愿填报
            path: '/reported',
            component: ReportedIndexPage,
            children: [
                {
                    path: '',
                    name: 'ReportedSimulationPage',
                    component: ReportedSimulationPage,
                },
                {
                    path: 'buy',
                    name: 'ReportedBuyPage',
                    component: ReportedBuyPage,

                }
            ]
        },
        { // 专业测评
            path: '/appraisal',
            component: AppraisalIndexPage,
            children: [
                {
                    path: '',
                    component: AppraisalBuyPage,
                }, {
                    path: 'buy',
                    name: 'AppraisalBuyPage',
                    component: AppraisalBuyPage,
                }, {
                    path: 'step1',
                    name: 'AppraisalTestStepPage',
                    component: AppraisalTestStepPage,
                }
                , {
                    path: 'step2',
                    name: 'AppraisalTestStep2Page',
                    component: AppraisalTestStep2Page,
                }

            ]
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
            path: '/recruit',
            component: RecruitIndexPage,
            children: [{ //院校专业查询
                path: '',
                component: RecruitListPage,
            }, { //院校专业查询
                path: 'lsit',
                name: 'RecruitListPage',
                component: RecruitListPage,
            }, { //自招数据查询
                path: 'oneself',
                name: 'RecruitOneselfPage',
                component: RecruitOneselfPage,
            }, { //自主招生1对1
                path: 'student',
                name: 'RecruitStudentPage',
                component: RecruitStudentPage,
            }]
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