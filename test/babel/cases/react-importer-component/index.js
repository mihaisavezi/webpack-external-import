import React from "react";
import {ExternalComponent} from '../../../../index';
const helloWorldUrl = 'http://test.com'
const component = ()=><ExternalComponent src={import(/* importUrl */ helloWorldUrl)} module="TitleComponent" export='Title' title={'Some Heading'}/>
