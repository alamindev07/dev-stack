# 🚀 Dev Stack

Dev Stack is a responsive React web application where users can explore modern web technologies and build their own personalized technology stack. Users can view technology information, add technologies to their stack, remove selected technologies, and manage their stack easily.

## 🛠️ Technologies Used

- React
- JavaScript
- Vite
- Tailwind CSS
- React Icons
- React Toastify
- JSON

## ✨ Key Features

- 🔍 **Explore Technologies** — Browse different technologies with their name, category, description, difficulty level, rating, and icon.
- 🧰 **Build Your Own Stack** — Add your favorite technologies to a personal stack and remove them whenever needed.
- 🔔 **Responsive UI & Notifications** — Fully responsive design for desktop, tablet, and mobile with toast notifications for add, remove, and duplicate actions.



## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. It makes React code easier to read and helps us describe the UI structure clearly.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. They are read-only inside the child. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component. I used it in `App.jsx` to store the technology list and the technologies selected by the user.

For example:

const [selectedTechnologies, setSelectedTechnologies] = useState([]);


When a user adds or removes a technology, the state is updated and React updates the UI.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component. I used it in `App.jsx` to fetch the technology data from `technologies.json` when the application loads.

For example:


useEffect(() => {
  const loadTechnologies = async () => {
    const response = await fetch("/technologies.json");
    const data = await response.json();

    setTechnologies(data);
  };

  loadTechnologies();
}, []);


The empty dependency array means the effect runs when the component is first loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list. It helps React understand which item has been added, removed, or changed so it can update the UI efficiently.

In this project:


{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}


Here, `technology.id` is used because it is unique for each technology.


### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI based on a condition. I used it in the `YourStack` component to show an empty-stack message when no technology has been selected.

For example:

jsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <StackItem />
)}


If the stack is empty, the user sees the empty-stack message. Otherwise, the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

For example, `App.jsx` passes the technology data and the `onAdd` function to `TechnologyGrid`:


<TechnologyGrid
  technologies={technologies}
  selectedTechnologies={selectedTechnologies}
  onAdd={handleAddToStack}
/>


The child can send information back to the parent by calling a function passed through props.

For example:

onAdd(technology);


Here, the child calls the `onAdd` function, which runs the `handleAddToStack` function in the parent.

So the data flow is:

Parent → Props → Child → Callback Function → Parent


