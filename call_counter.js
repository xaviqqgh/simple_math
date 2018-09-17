var internal_call_counter = 0;
function count_call() {
    ++internal_call_counter;
    console.log('Has hecho ' + internal_call_counter + ' llamadas!');
}
module.exports = count_call;