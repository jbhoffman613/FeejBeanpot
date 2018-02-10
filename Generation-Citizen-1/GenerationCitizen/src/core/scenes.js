/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { LaunchScene } from '@Launch/scenes'
import { CounterScene } from '@Counter/scenes'
import { CollegeChapterScene } from '@CollegeChapter/scenes'
import { ClassroomScene } from '@Classroom/scenes'
import { DCScene } from '@DC/scenes'
import { GoalScene } from '@Goal/scenes'
import { SpeakerScene } from '@Speaker/scenes'
import { MasterScene } from '@Master/scenes'
import { LoginScene } from '@Login/scenes'
import { ClassCodeScene } from '@ClassCode/scenes'
import { InfluencersScene } from '@Influencers/scenes'
import { Lesson4Scene } from '@Lesson4/scenes'
import { Lesson10Scene } from '@Lesson10/scenes'
import { DecisionMakerScene } from '@DecisionMaker/scenes'
import { FocusIssueScene } from '@FocusIssue/scenes'
import { RootCauseScene } from '@RootCause/scenes'

//Look at 'react-native-router-flux' docs
export default Actions.create(
  <Scene key="root">
    <Scene key="launch" component={LaunchScene} title="Launch" />
    <Scene key="counter" component={CounterScene} title="Counter" />
    <Scene key="collegeChapter" component={CollegeChapterScene} title="College Chapter" />
    <Scene key="classroom" component={ClassroomScene} title="Classroom" />
    <Scene key="dc" component={DCScene} title="Democracy Coaches" />
    <Scene key="goal" component={GoalScene} title="Goal" />
    <Scene key="speaker" component={SpeakerScene} title="Guest Speaker" />
    <Scene key="master" component={MasterScene} title="Master" />
    <Scene key="login" component={LoginScene} title="Login" />
    <Scene key="classCode" component={ClassCodeScene} title="Class Code" />
    <Scene key="influencers" component={InfluencersScene} title="Influencers" />
    <Scene key="lesson4" component={Lesson4Scene} title="Lesson 4" />
    <Scene key="lesson10" component={Lesson10Scene} title="Lesson 10" />
    <Scene key="decisionMaker" component={DecisionMakerScene} title="Decision Maker" />
    <Scene key="focusIssue" component={FocusIssueScene} title="Focus Issue" />
    <Scene key="rootCause" component={RootCauseScene} title="Root Cause" />
  </Scene>
)
