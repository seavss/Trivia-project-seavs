# General Assembly - Project 1

## Project Info
  This was my first project at General Assembly's Immersive Program. The task given to me was to create a working, interactive, non-trivial gam, that included one CSS animation/ transition fired by a DOM event, be styled with CSS, and use flexbox or CSS grid for the layout and positioning.

### Description 

This is a trivia game where the user is prompted to answer 10 multiple choice questions to win a grand prize if a score is reached, if not they are eliminated. 

### Project Schedule

|Day      | Agenda                      |
|---------|-----------------------------|
|Sunday   |Idea, Wireframe, Pseudo Code |
|Monday   |Basic Clickable Model        |
|Tuesday  |Coding                       |
|Wednesday|Finished Prototype, Editing  |
|Thursday |Editing and Completion       |
|Friday   |Presentation                 |

```
*landing page
*game initialization
*playing the game
*winning the game
*winning prize
```

### Technologies Used

- HTML
- CSS
- Javascript
- JQuery

Problems with implementation: The answers are not in a,b,c format, they are clicked on and the color background changes. And I would need to load random questions, not the same ones in the same order.

Solution: The answer fields can be styled using CSS by having buttons and changing the color on hover and click. I could store at least 20 questions in the array and then use Math.random for the array length to churn out random questions.

### Future Developments

- Audio Functions
  - For Background
    -  <audio controls> <source src="horse.ogg" type="audio/ogg" </audio> 
  - JS When question is correct/incorrect(also for results (win/loss screen))
    - .addEventListener("click") if/else

### Deployment

[Project is Available Here](https://heartfelt-medovik-85cba2.netlify.app/)
