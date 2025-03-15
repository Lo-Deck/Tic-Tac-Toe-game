

const btnChooseMark = document.querySelectorAll('.button-select');
const btnVersus = document.querySelectorAll('.button-versus');
const board = document.querySelectorAll('.mark');


let tied = 0;
let result = 0;


let player1 = new Player('X', true, 'url("./assets/icon-x-outline.svg") center center no-repeat, rgb(26, 42, 51)', 1);
let player2 = null;
let cpu = null;

let arrayGridBoard = Array.from( {length:9} , () => '' );


function Player(mark, active, hover, number) {
    this.mark = mark;   // X or O
    this.active = active; // if true player plays
    this.hover = hover; //change hover X or O
    this.score = 0;
    this.number = number; //player 1 or 2
    this.tied = 0; // to save tied score, just use player1.tied
}


function Cpu(mark, active) {
    this.mark = mark;   // X or O
    this.active = active; // if true player plays
    this.score = 0;
}



function cpuPlay(array, mark){

    console.log(' ********** CPU PLAYING FUNCTION *********** ');

    //horizontal check

    let line = 0;
    let k = 2;
    let i = 0;
    let memoriseIndex = 0;
    let priorityPlay = 0;

    console.log(array);


    while( i <= k ){

        console.log(' ********** HORIZONTAL *********** ');
        console.log('************************* i : ' + i);
        console.log(array[i]);

        if(array[i] === mark){
            line++;
            console.log('mark');
            console.log('line : ' + line);                
        }

        else if(array[i] === cpu.mark){
            priorityPlay++;
        }

        else{
            memoriseIndex = i;
        }


        if(i === k && priorityPlay === 2 && !array[memoriseIndex]){ //playing priority means cpu plays to win

            console.log(' PLAYING PRIORITY');
            console.log(array);
            console.log(priorityPlay);

            array[memoriseIndex] = cpu.mark;

            document.querySelectorAll('.mark')[memoriseIndex].innerHTML = `<img class="player-mark" src=${ cpu.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            console.log(array);

            memoriseIndex = 0;

            priorityPlay = 0;

            return;

        }

        if(i === k && line === 2 && !array[memoriseIndex]){

            console.log(' PLAYING HORIZONTAL');
            console.log(array);

            console.log('memoriseIndex : ' + memoriseIndex);
            console.log(' cpu.mark : ' +  cpu.mark);
            console.log(' array[memoriseIndex] : ' +  array[memoriseIndex]);

            array[memoriseIndex] = cpu.mark;

            document.querySelectorAll('.mark')[memoriseIndex].innerHTML = `<img class="player-mark" src=${ cpu.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            console.log(array);      

            memoriseIndex = 0;

            priorityPlay = 0;

            return;
        }

        else if(i === k && line !== 2){

            if(k < 8){

                k += 3;

            }

            line = 0;

            memoriseIndex = 0;

            priorityPlay = 0;

        }

        else if(i === k && line === 2 && array[memoriseIndex]){
            k += 3;
            line = 0;

            memoriseIndex = 0;

            priorityPlay = 0;
        }

        i++;

    }


    //vertical check

    memoriseIndex = 0;

    line = 0;
    k = 6;
    i = 0;

    while( i <= k ){

        console.log(' ********** VERTICAL *********** ');
        console.log('************************* i : ' + i);
        console.log(array[i]);

        if(array[i] === mark){

            line++;

        }

        else if(array[i] === cpu.mark){

            priorityPlay++;

        }


        else{
            memoriseIndex = i;
        }


        
        if(i === k && priorityPlay === 2 && !array[memoriseIndex]){

            console.log(' PLAYING PRIORITY');
            console.log(array);

            array[memoriseIndex] = cpu.mark;

            document.querySelectorAll('.mark')[memoriseIndex].innerHTML = `<img class="player-mark" src=${ cpu.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            console.log(array);

            memoriseIndex = 0;

            priorityPlay = 0;

            return;

        }




        if(i === k && line === 2 && !array[memoriseIndex]){

            console.log(' PLAYING VERTICAL');
            console.log(array);

            console.log('memoriseIndex : ' + memoriseIndex);
            console.log(' cpu.mark : ' +  cpu.mark);

            console.log(' array[memoriseIndex] : ' +  array[memoriseIndex]);

            array[memoriseIndex] = cpu.mark;

            document.querySelectorAll('.mark')[memoriseIndex].innerHTML = `<img class="player-mark" src=${ cpu.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            console.log(array);

            memoriseIndex = 0;

            priorityPlay = 0;

            return;
        }

        else if(i === k && line !== 2){

            console.log('----------------------------------------------------------reboot');

            if(k < 8){

                k += 1;

            }
            else{
                break;
            }

            line = 0;

            i = k - 6;

            memoriseIndex = 0;

            priorityPlay = 0;

            continue;

        }

        i += 3; 

    }


    //cross check

    memoriseIndex = 0;

    line = 0;
    k = 6;
    i = 2;

    let up = 2;

    while( i <= k ){

        console.log(' ********** CROSS *********** ');
        console.log('************************* i : ' + i);
        console.log(array[i]);

        if(array[i] === mark){

            line++; //if 2 mark on the line

        }

        else if(array[i] === cpu.mark){

            priorityPlay++;

        }

        else{

            memoriseIndex = i;

        }


        
        if(i === k && priorityPlay === 2 && !array[memoriseIndex]){

            console.log(' PLAYING PRIORITY');
            console.log(array);

            array[memoriseIndex] = cpu.mark;

            document.querySelectorAll('.mark')[memoriseIndex].innerHTML = `<img class="player-mark" src=${ cpu.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            console.log(array);

            memoriseIndex = 0;

            priorityPlay = 0;

            return;

        }


        if(i === k && line === 2 && !array[memoriseIndex]){

            console.log(' PLAYING CROSSING');
            console.log(array);
            console.log('memoriseIndex : ' + memoriseIndex);
            console.log(' cpu.mark : ' +  cpu.mark);

            array[memoriseIndex] = cpu.mark;

            document.querySelectorAll('.mark')[memoriseIndex].innerHTML = `<img class="player-mark" src=${ cpu.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            console.log(array);

            memoriseIndex = 0;

            priorityPlay = 0;

            return;
        }

        else if(i === k && line !== 2){

            console.log('----------------------------------------------------------reboot');

            if(k === 6){

                k = 8;

            }
            else{
                break;
            }

            line = 0;
            i = 0;
            up = 4;

            memoriseIndex = 0;

            priorityPlay = 0;

            continue;

        }

        else if(i === k && line === 2 && array[memoriseIndex]){ 


            console.log('---------------------');

            line = 0;

            if(k === 6){

                k = 8;

            }
            else{
                break;
            }

            i = 0;
            up = 4;

            memoriseIndex = 0;

            priorityPlay = 0;

            continue;

        }

        i += up; 

    }


    console.log('RANDOM');

    let arrayRandom  = [];
    let indexRandom = 0;
    i = 0;


    while(i < 8){  //cpu plays corner

        console.log('first random');

        if(!array[i]){

            arrayRandom.push(i);
            console.log(arrayRandom);

        }

        i += 2;

        if(i === 4){
            i += 2;
        }

        if(i === 8 && arrayRandom.length !== 0){

            indexRandom = Math.floor(Math.random() * (arrayRandom.length - 0) );

            console.log('indexRandom : ' + indexRandom);
            console.log(arrayRandom);
            console.log(arrayRandom[indexRandom]);

            array[arrayRandom[indexRandom]] = cpu.mark;

            document.querySelectorAll('.mark')[arrayRandom[indexRandom]].innerHTML = `<img class="player-mark" src=${ cpu.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            return;

        }


    }


    arrayRandom  = [];
    indexRandom = 0;
    i = 0;

    while(i < 8){  //cpu plays corner

        console.log('second random');

        if(!array[i]){

            arrayRandom.push(i);
            console.log(arrayRandom);

        }

        i++;

        if(i === 8 && arrayRandom.length !== 0){

            indexRandom = Math.floor(Math.random() * (arrayRandom.length - 0) );

            console.log(indexRandom);
            console.log(arrayRandom);
            console.log(arrayRandom[indexRandom]);
            
            array[arrayRandom[indexRandom]] = cpu.mark;
 
            document.querySelectorAll('.mark')[arrayRandom[indexRandom]].innerHTML = `<img class="player-mark" src=${ cpu.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            return;

        }

    }




}




function win(array, playerMark) {

    console.log('function win : ' + array);

    tied = 0;

    //HORIZONTAL

    for(let i = 0; i <= 2; i++){

        if(array[i] === playerMark){

            if(i === 2){
                console.log('WIN');
                return 1;
            }

            continue;
        }
        else{
            break;
        }

    }


    for(let i = 3; i <= 5; i++){

        if(array[i] === playerMark){

            if(i === 5){
                console.log('WIN');
                return 1;
            }

            continue;

        }
        else{
            break;
        }

    }

    for(let i = 6; i <= 8; i++ ){

        if(array[i] === playerMark){

            if(i === 8){
                console.log('WIN');
                return 1;
            }
            continue;
        }
        else{
            break;
        }

    }


    //VERTICAL

    for(let i = 0; i <= 6; i += 3){

        if(array[i] === playerMark){

            if(i === 6){
                console.log('WIN');
                return 1;
            }

            continue;
        }
        else{
            break;
        }

    }

    for(let i = 1; i <= 7; i += 3){

        if(array[i] === playerMark){

            if(i === 7){
                console.log('WIN');
                return 1;
            }

            continue;
        }
        else{
            break;
        }

    }

    for(let i = 2; i <= 8; i += 3){

        if(array[i] === playerMark){


            if(i === 8){
                console.log('WIN');
                return 1;
            }

            continue;
        }
        else{
            break;
        }

    }


    //CROSS

    for(let i = 0; i <= 8; i += 4){

        if(array[i] === playerMark){

            if(i === 8){
                console.log('WIN');       
                return 1;
            }

            continue;

        }
        else{
            break;
        }

    }

    for(let i = 2; i <= 6; i += 2){

        if(array[i] === playerMark){

            if(i === 6){
                console.log('WIN');       
                return 1;
            }

            continue;
        }

        else{
            break;
        }

    }





    for(let i = 0; i <= 8; i++){ /* TIED */

        if(!array[i]){

            break;

        }
        else if(array[i] && i === 8){

            console.log(' ********** TIED   ***********');
            tied = 1;
            return 1;

        }

    }

}



function displayWinner(player) {

    document.querySelector('.background').style.display = 'block';
    document.querySelector('.winner').style.display = 'block';

    if(tied){

        player1.tied += 1;
        document.querySelector('.result-ties').textContent = player1.tied;
        document.querySelector('.winner .title').textContent = ``;
        document.querySelector('.winner .text').textContent = `round tied`;
        document.querySelector('.winner .text').style.color = '#a8bfc9';

        return;

    }

    player.score += 1;
    player.mark === 'X' ? document.querySelector('.result-X').textContent = player.score : document.querySelector('.result-O').textContent = player.score ;

    if(!cpu){

        document.querySelector('.winner .title').textContent = `player ${player.number} wins!`;
        document.querySelector('.winner .text').innerHTML = `<img class="image-winner" src="" alt="">takes the round`;
        document.querySelector('.image-winner').src = `${ player.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' }`;
        document.querySelector('.winner .text').style.color = `${ player.mark === 'X' ? '#50b5b2'  : '#f2b137' }`;

    }
    else{

        if(player === player1){

            document.querySelector('.winner .title').textContent = `you won`;
            document.querySelector('.winner .text').innerHTML = `<img class="image-winner" src="" alt="">takes the round`;
            document.querySelector('.image-winner').src = `${ player.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' }`;
            document.querySelector('.winner .text').style.color = `${ player.mark === 'X' ? '#50b5b2'  : '#f2b137' }`;

        }

        else if(player === cpu){

            document.querySelector('.winner .title').textContent = `oh no, you lost...`;
            document.querySelector('.winner .text').innerHTML = `<img class="image-winner" src="" alt="">takes the round`;
            document.querySelector('.image-winner').src = `${ player.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' }`;
            document.querySelector('.winner .text').style.color = `${ player.mark === 'X' ? '#50b5b2'  : '#f2b137' }`;

        }

    }

}


function reset(){

    document.querySelector('.background').style.display = 'none';
    document.querySelector('.winner').style.display = 'none';
    document.querySelector('.game-menu').style.display = 'block';
    document.querySelector('.container-game').style.display = 'none';

    arrayGridBoard = Array.from( {length:9} , () => '' );

    tied = 0;
    result = 0;    

    board.forEach( (item) => {

        item.innerHTML = '';

    });


    document.querySelectorAll('.score').forEach( (item) => {

        item.textContent = '0';

    });

}


document.querySelector('.button-quit').addEventListener('click', () => {

    reset();

});


document.querySelector('.button-next-round').addEventListener('click', () => {

    document.querySelector('.background').style.display = 'none';
    document.querySelector('.winner').style.display = 'none';

    arrayGridBoard = Array.from( {length:9} , () => '' );

    result = 0;
    tied = 0;    

    board.forEach( (item) => {

        item.innerHTML = '';

    });


    console.log(cpu);
    console.log(result)


    if(cpu){

        if(cpu.mark === 'X'){

            console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS');

            //CPU plays first

            cpuPlay(arrayGridBoard, player1.mark);
            player1.active = true;
            document.styleSheets[1].cssRules[33].style.background = player1.hover;
            
            
        }      

    }

});


document.querySelector('.button-refresh').addEventListener('click', () => {

    arrayGridBoard = Array.from( {length:9} , () => '' );

    board.forEach( (item) => {

        item.innerHTML = '';

    });


});



//choose X or O, player1

btnChooseMark.forEach( (item, index, array)  => { 
    
    item.addEventListener('click', () => {

        player1.mark = item.dataset.mark;  
        index === 0 ? player1.active = true : player1.active = false;  
        index === 0 ? player1.hover = 'url("./assets/icon-x-outline.svg") center center no-repeat, rgb(26, 42, 51)' : player1.hover = 'url("./assets/icon-o-outline.svg") center center no-repeat, rgb(26, 42, 51)' ;
        player1.score = 0;
        
        for(let i = 0; i < array.length; i++){

            i === index ? array[i].classList.add('selected') : array[i].classList.remove('selected');

        }

    });

});



// versus cpu or player

btnVersus.forEach( (item, index)  => {
    
    item.addEventListener('click', () => {

        document.querySelector('.game-menu').style.display = 'none';
        document.querySelector('.container-game').style.display = 'block';

        if(index === 0){ /** VERSUS CPU **/

            if(player1.mark === 'X'){
                document.querySelector('.player-X').textContent = 'P1';
                document.querySelector('.player-O').textContent = 'CPU';  
                cpu = new Cpu('O');
                cpu.score = 0;
            }
            else{
                document.querySelector('.player-X').textContent = 'CPU';
                document.querySelector('.player-O').textContent = 'P1';  
                cpu = new Cpu('X');
                cpu.score = 0;


                /* CPU PLAY FIRST */

                cpuPlay(arrayGridBoard, player1.mark);
                player1.active = true;
                document.styleSheets[1].cssRules[33].style.background = player1.hover;

            }

        }
        else{ /** VERSUS PLAYER **/

            if(player1.mark === 'X'){

                document.querySelector('.player-X').textContent = 'P1';
                document.querySelector('.player-O').textContent = 'P2';
                player2 = new Player('O', false, 'url("./assets/icon-o-outline.svg") center center no-repeat, rgb(26, 42, 51)', 2);
                player2.score = 0;

            }
            else{

                document.querySelector('.player-X').textContent = 'P2';
                document.querySelector('.player-O').textContent = 'P1';
                player2 = new Player('X', true, 'url("./assets/icon-x-outline.svg") center center no-repeat, rgb(26, 42, 51)', 2);
                player2.score = 0;

            }

        }

    });

});


//game

board.forEach( (item, index) => {


    item.addEventListener('click', () => {

        if(player1.active && !item.firstChild){//

            console.log(' ******************************   player1');

            if(player1.mark === 'O'){

                document.querySelector('.svg-turn').innerHTML = `<svg width="16" height="16" viewbox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd"/>
                                                                </svg>`;

            }
            else if(player1.mark === 'X'){

                document.querySelector('.svg-turn').innerHTML = `<svg width="16" height="16" viewbox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"/>
                                                                </svg>`;

            }
                                                

            item.innerHTML = `<img class="player-mark" src=${ player1.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            arrayGridBoard[index] = player1.mark;
            result = win(arrayGridBoard, player1.mark); // check if any winner


            if(result){

                displayWinner(player1);

            }


            if(cpu && !result){ 

                cpuPlay(arrayGridBoard, player1.mark);

                result = win(arrayGridBoard, cpu.mark);

                setTimeout(() => {

                    if(result){
                        displayWinner(cpu);
                    }
                    
                }, 500);
                
            }

            if(player2 && !result){ // change player

                player1.active = !player1.active;
                player2.active = !player2.active;
                player1.active ? document.styleSheets[1].cssRules[33].style.background = player1.hover : document.styleSheets[1].cssRules[33].style.background = player2.hover;
    
            }
    
            else if(player2 && result){ /*****   AJOUT ICI*********** */
    
                console.log('after result');
    
                if( player1.mark === 'X'){
    
                    player1.active = true;
                    player2.active = false;
    
                }
                else{
    
                    player1.active = false;
                    player2.active = true;
    
                }
    
                player1.active ? document.styleSheets[1].cssRules[33].style.background = player1.hover : document.styleSheets[1].cssRules[33].style.background = player2.hover;
    
            }
    

        }

        else if(player2.active && !item.firstChild){

            console.log(' ******************************   player2');

            if(player2.mark === 'O'){

                document.querySelector('.svg-turn').innerHTML = `<svg width="16" height="16" viewbox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd"/>
                                                                </svg>`;

            }
            else if(player2.mark === 'X'){

                document.querySelector('.svg-turn').innerHTML = `<svg width="16" height="16" viewbox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"/>
                                                                </svg>`;

            }

            item.innerHTML = `<img class="player-mark" src=${ player2.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

            arrayGridBoard[index] = player2.mark;

            result = win(arrayGridBoard, player2.mark); // check if any winner

            if(result){

                displayWinner(player2);
                
            }

            if(player2 && !result){ // change player

                player1.active = !player1.active;
                player2.active = !player2.active;
                player1.active ? document.styleSheets[1].cssRules[33].style.background = player1.hover : document.styleSheets[1].cssRules[33].style.background = player2.hover;
    
            }
    
            else if(player2 && result){ /*****   AJOUT ICI*********** */
    
                console.log('after result');
    
                if( player1.mark === 'X'){
    
                    player1.active = true;
                    player2.active = false;
    
                }
                else{
    
                    player1.active = false;
                    player2.active = true;
    
                }
    
                player1.active ? document.styleSheets[1].cssRules[33].style.background = player1.hover : document.styleSheets[1].cssRules[33].style.background = player2.hover;
    
            }
    

        }

        console.log('result : ' + result);

    });


});


