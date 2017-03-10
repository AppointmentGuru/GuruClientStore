<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <el-menu  mode="horizontal" >
          <el-menu-item index="1">
            AppointmentGuru Client Vuex Store
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
          <el-menu-item index="1-1">Getting started</el-menu-item>
          <el-submenu index="1">
            <template slot="title">Mutations</template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">Actions</template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">Filters</template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-1">Raw data</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <div class='content' >
          <center><img src="./assets/logo.png"></center>

          <h3>Mutations</h3>
          <el-collapse >
            <el-collapse-item
              v-for='(mutation, index) in mutations'
              :key="mutation.name"
              :name="index">
                <template slot="title">
                  {{mutation.name}}
                  <el-button
                    v-show='!mutation.requiresData'
                    style='float: right;margin:10px;'
                    type="primary" size="mini"
                    @click.prevent='mutate(mutation.name)'>run
                  </el-button>
                </template>
              <div>{{mutation.description}}</div>
              <div>
                <strong>Usage:</strong>
                <pre><code>
                this.$gurustore.commit('{{mutation.name}}')
                </code></pre>
                <el-button
                  type="primary" size="small"
                  @click='mutate(mutation.name)'>Run mutation
                </el-button>
              </div>
            </el-collapse-item>
          </el-collapse>

          <h3>Actions</h3>
          <el-collapse >
            <el-collapse-item
              v-for='(action, index) in actions'
              :key="action.name"
              :name="index">
              <template slot="title">
                {{action.name}}
                <el-button
                  v-show='!action.requiresData'
                  style='float: right;margin:10px;'
                  type="primary" size="mini"
                  @click.prevent='runAction(action.name)'>run
                </el-button>

              </template>
              <div>{{action.description}}</div>
              <div>{{action.requiresData}}
                <div v-if='action.requiresData' >
                  <input v-model='action.defaultData' />
                  <el-button
                    v-if='action.requiresData'
                    type="primary" size="small"
                    @click='runAction(action.name, action.defaultData)'>Run action with: {{action.defaultData}}
                  </el-button>
                </div>
                <el-button
                  v-if='!action.requiresData'
                  type="primary" size="small"
                  @click='runAction(action.name)'>
                    Run action</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>

          <h3>Filters</h3>
          <p>
          GuruStore provides a mixin which comes with utility methods for filtering results.
          </p>
          <strong>Usage</strong>
          <pre>import GuruStoreMixins from 'guruclientstore/src/store/mixins</pre>

          <el-collapse >
            <el-collapse-item
              title='gStoreGetAppointmentById'
              name='gStoreGetAppointmentById' >
              <div>
              Search for id: <input v-model='appointmentId' />
              <pre>{{selectedAppointment}}</pre>
              </div>
            </el-collapse-item>

            <el-collapse-item
              title='gStoreGetAppointmentsByDay'
              name='gStoreGetAppointmentsByDay' >
              <div>
              Search for id: <input v-model='activeDay' />
              <div>{{appointmentsByDay.length}} appointments for {{activeDay}}</div>
              <pre>{{appointmentsByDay}}</pre>
              </div>
            </el-collapse-item>
          </el-collapse>

          <h3>Active state:</h3>
          <pre>{{state}}</pre>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  MUTATION_REGISTRY,
  ACTION_REGISTRY
} from './store/mutations'
import GuruStoreMixins from './store/mixins'
import moment from 'moment'

export default {
  MUTATION_REGISTRY,
  name: 'app',
  mixins: [GuruStoreMixins],
  data () {
    return {
      'appointmentId': null,
      'activeDay': moment().format('YYYY-MM-DD')
    }
  },
  methods: {
    mutate (mutation) {
      this.$gurustore.commit(mutation)
    },
    runAction (actionName, data) {
      if (data) {
        this.$gurustore.dispatch(actionName, data)
      } else {
        this.$gurustore.dispatch(actionName)
      }
    }
  },
  computed: {
    state () {
      return this.$gurustore.state
    },
    appointments () {
      return this.$gurustore.state.appointments.appointments
    },
    appointmentsByDay () {
      console.log(`searching ${this.appointments.length} appointments for ${this.activeDay}`)
      return this.gStoreGetAppointmentsByDay(this.appointments, this.activeDay)
    },
    mutations () {
      return MUTATION_REGISTRY
    },
    actions () {
      return ACTION_REGISTRY
    },
    selectedAppointment () {
      console.log(`searching ${this.appointments.length} appointments`)
      let id = parseInt(this.appointmentId)
      return this.gStoreGetAppointmentById(this.appointments, id)
    }
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  margin-left:auto;margin-right:auto;
}
#app .content {
  padding:20px;
}
</style>
