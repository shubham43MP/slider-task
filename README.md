# Slider App

## Install Dependencies
Run the below command -
```
npm i
```

## Start the dev server
```
npm run dev
```

- The server should start at: `http://localhost:5173/`

You should be able to see the slider.

## Dev Comments
- Not using <input> tag makes us to make compromises like using the React ref API, and target the DOM which is not a recommended React pattern
- Compromise with the use of inline styles due to dynamic considerations for slider
- The task looks relatively simpler but is significantly nuanced in various aspects
- onChange prop in slider component is added for purposes of tracking slider value in the parent component. This is just for demonstration purpose and if anyone dont want it they can very well remove the prop