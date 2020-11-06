/**
 * @constant config
 * @description here i'll put any recurrently changing paramater of the template
 */
const config = {
	title: "hello,Strive!", ///that as of now means only the title but i belive this object will grow soon
}
/**
 * initialize the page
 *
 */
window.onload = () => {
	document.title = config.title
	document.querySelector("#mainMenu").innerHTML = config.title
}
