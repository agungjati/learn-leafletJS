$(function(){
    let today = new Date()
    today.setHours(0,0,0,0)
    let datesAvailable = [ 
        today.getTime(), 
        today.setDate(today.getDate() + 1),
        today.setDate(today.getDate() + 1)
    ]

    $("input[name='date']").datepicker({
        autoclose:true,
        beforeShowDay : (date) => {
            if(datesAvailable.includes(date.getTime()))
                return true
            else
                return false
        }
    })
})