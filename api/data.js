import Mock from "mockjs"
import mockapi from "./mock"

Mock.mock('/home/getData',mockapi.getStatisticalData)