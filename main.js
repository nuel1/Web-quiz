

const quiz = {
    intro: document.querySelector('.intro_container'),
    quiz_wrapper: document.querySelector('.quiz_section'),
    startBtn: document.querySelector('.start'),
    time: document.querySelectorAll('.time_wrapper span'),
    submitBtn: document.querySelector('.submit'),
    form: document.querySelector('form'),
    input: document.querySelectorAll('form input'),
    printScore: document.querySelector('span.score'),
    popup: document.querySelector('.popup_wrapper'),
    main(){


        // --------------------------->
        // initialize time count
        let sec = 59;
        let min = 3;
        let element = this.time;
        this.zero;



        // execute counter function min times



        // counter function declared
        const counter = () =>{


            element[2].innerHTML = sec;
            element[0].innerHTML = `${min}`;


            // prepend zero to min to maintain min length
            let zeroPad = "0";

            if(element[0].textContent.length === 1){

                element[0].innerHTML = `${zeroPad}${min}`;

            }


            // Assign new value(double zero) to element[2] only if sec is 0
            if(sec === 0){

                element[2].innerHTML = "00";
                sec = sec + 1 * 60;
                min--;

            }
            

            if(min < 1){
                element.forEach(item => item.style.color = 'orangered');
            }

            if(min < 1 && sec < 15){
                alert("Alert!! \n You are advised to submit before time runs out");
                element.forEach(item => item.style.color = 'red');

            }

            if(sec < 10){
                zeroPad = "0" + sec;
                element[2].innerHTML = zeroPad;
            }

            // Clear setInverval immediately min is 0
            if(min < 0){

                window.clearInterval(index);

                // Involk timeout message to user
                alert("Your time is up!");
                document.write("Your paticipation in the test has been denied");

            }

            sec--;

        } 

        const index = setInterval(counter, 1000);


        // --------------------------->








        // --------------------------->
        const form = this.form;
        const inputs = this.input;
        // Initialize answer function
        const answer = () =>{
            // covert form as document object into array object
            // so as to apply array methods and properties to form items
            const ansInput = [...form.answer];
            const ansInputVal = ansInput.map(item => item.value);
            return ansInputVal;
        }


        //---------------------------->







        //---------------------------->

        const radio = type =>{
            return type;
        }

        //---------------------------->







        //---------------------------->

        // Value of radio() stored in host
        const host = Array.from(radio(inputs));



        const onSubmit = e =>{
            const checkedInput = [];
            let score = 0;


            for(let item of host){
                //Directly store checked inputs into an array
                if(item.checked){
                    checkedInput.push(item);
                }
            }


            // In other to execute further functions, all inputs must be
            // checked or else deny execution.
            if(checkedInput.length === (host.length === 10 ? host.length : 10)){
                for(let i=0; i<checkedInput.length; i++){
                    if(checkedInput[i].value === answer()[i]){
                        score++;
                    }
                }


                let count = 0;
                let print = this.printScore;


                const displayScore = score =>{
                    let toPercentage = score * 10;
                    print.innerHTML = `${count}%`;
                    if(count < toPercentage){
                        count++;
                    }else if(count === toPercentage){
                        window.clearInterval(indexTwo);
                    }
                }

                const indexTwo = setInterval(() => displayScore(score), 20);


                this.popup.style.display = 'grid';
                scrollTo(0,0);

                // stop time counter if user submit quiz
                window.clearInterval(index);
            }

            else{

                alert("Please check all boxes");
            }

            e.preventDefault();

        }

        //---------------------------->


        //---------------------------->

        form.addEventListener('submit', e =>{
            
            onSubmit(e);

        });


        //---------------------------->







        //---------------------------->

        const afterSubmit = () =>{
            this.popup.display = 'none';
            window.document.write("You paticipation as been recorded. We will get back to you soon");
        }

        const cancelIcon = document.querySelector('.cancel_icon');
        cancelIcon.addEventListener('click', afterSubmit);

            //---------------------------->






    },
    startQuiz(){





        // Execute main() on mouse click

        const executeQuiz = () =>{

            this.intro.style.display = 'none';
            this.quiz_wrapper.style.display = 'block';
            this.main();

        }





        this.startBtn.addEventListener('click', executeQuiz);



    
        
    },



    quizCallback(){
        this.startQuiz();
    }



}
quiz.quizCallback();



