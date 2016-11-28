function JQFullcalendar() {
    var that = this;
    that.selector = ".fullCalendar";
    this.options = {
        header: {
            left:   'today',
            center: ' prev,title,next',
            right: 'month,agendaWeek,agendaDay'
        },
        // height: 620,
        defaultDate: new Date(),
        minTime: "07:00:00",
        maxTime: "23:00:00",
        //slotDuration: '00:30:00',
        ignoreTimezone: true,
        slotMinutes: 15,
        selectable: true,
        selectHelper: true,
        // weekends: false,
        columnFormat: {
            month: 'dddd',    // Monday, Wednesday, etc
            week: 'ddd D', // Mon. 7
            day: 'dddd, MMM dS'  // Monday 9/7
        },
        titleFormat: {
            week: "MMM YYYY",
            day: 'ddd D MMM YYYY'
        },
        axisFormat: 'H:mm',
        events: [
            {
                "id": "1",
                "title": "Event normal",
                "start": "2016-11-25T07:00:00",
                "end": "2016-11-25T08:00:00"
            }
            ],
        views: {
            agendaDay: {
                slotDuration: '00:30',
                snapDuration: '00:30',
            },
            month: {
                eventLimit: 0
            }
        },
        
        allDaySlot: false,
        viewRender: function(view, element) {
            $(document).trigger("currentData", [view.title.split(" ")[0].toLowerCase()])
        },
        select: function(start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                // create Event
                $(document).trigger("eventCreate", [eventData]);
            }
            $(that.selector).fullCalendar('unselect');
        }
    }
}
/**
 * drawCalendar
 * 
 * Instantiate fullCalendar
 * 
 * @param selector {String}
 */
JQFullcalendar.prototype.drawCalendar = function(selector) {
    $(selector).fullCalendar(this.options);
}
/**
 * method
 * 
 * Trigger fullCalendar method
 * 
 * @param options {Object}, contains selector and method key
 */
JQFullcalendar.prototype.method = function(options) {
    $(options.selector).fullCalendar(options.method);
}
/**
 * callEvent
 * 
 * call our Event emitter
 * 
 * @param event {String} event name
 * @param callback {Function}
 */
JQFullcalendar.prototype.callEvent = function(event, callback) {
    $(document).on(event, callback);
}
/**
 * renderEvent
 * 
 * render event to our agendaDay
 * 
 * @param selector {String}
 * @param eventData {Object} data to be rendered
 */
JQFullcalendar.prototype.renderEvent = function(selector, eventData) {
    $(selector).fullCalendar("renderEvent", eventData, true);
}

