<template>
  <div class="planning pt-3 ml-5 mr-5">
    <full-calendar
      :events="events"
      :config="config"
      @event-selected="eventSelected"
      ref="calendar" />
  </div>
</template>

<script>
var testEvents = [
  {
    title: 'Out of office',
    start: '2018-04-12 08:00',
    end: '2018-04-12 12:45',
    data: {
      dog_id: 2,
      cus_id: 10,
      tasks: [
        'knippen',
        'wassen'
      ]
    }
  }
]

export default {
  name: 'Planning',
  data: function () {
    return {
      events: testEvents,
      config: {
        weekends: false,
        droppable: false,
        eventStartEditable: false,
        eventDurationEditable: false,
        eventResourceEditable: false,
        weekNumbers: true,
        minTime: '08:00:00',
        maxTime: '17:00:00',
        eventBackgroundColor: '#467fcf',
        allDaySlot: false,
        height: 'auto',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek'
        },
        views: {
          week: {
            columnHeaderFormat: 'ddd D/M'
          }
        }
      }
    }
  },
  methods: {
    eventSelected (event, jsEvent, view) {
      console.log(event)
    }
  }
}
</script>
