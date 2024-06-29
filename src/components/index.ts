import{lazy}from'react'
import{default as Loading}from'./Loading/Loading'
const Hero=lazy(()=>import('./Hero/Hero'))
const Input=lazy(()=>import('./Input/Input'))
const Works=lazy(()=>import('./Works/Works'))
const About=lazy(()=>import('./About/About'))
const Navbar=lazy(()=>import('./Navbar/Navbar'))
const Footer=lazy(()=>import('./Footer/Footer'))
const Button=lazy(()=>import('./Button/Button'))
const Contact=lazy(()=>import('./Contact/Contact'))
const OrderModal=lazy(()=>import('./OrderModal/OrderModal'))
const MatrixLoader=lazy(()=>import('./matrixLoader/MatrixLoader'))
export{Hero,Input,Works,About,Navbar,Footer,Button,Loading,Contact,OrderModal,MatrixLoader}