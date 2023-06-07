## react-active-nav-button

`react-active-nav-button` is a custom React hook that provides a simple way to manage and update the active link/button state in a navigation component.

### Installation

You can install the package using npm:

```shell
npm install react-activenav-button
```

or with yarn:

```shell
yarn add react-activenav-button
```

### Usage

To use `react-activenav-button`, follow these steps:

-Import the hook into your React component:

```js
import ActiveNavButton from "react-activenav-button";
```

-Initialize the hook by passing the initial active link/button value:

```js
const { activeLink, handleButtonClick } = ActiveNavButton("home");
```

The `activeLink` variable holds the current active link/button value, and `handleButtonClick` is a function that you can attach to your link/button components to update the active state.

-Attach the `handleButtonClick` function to your link/button components:

```js
<button onClick={handleButtonClick('home')}>Home</button>
<button onClick={handleButtonClick('about')}>About</button>
<button onClick={handleButtonClick('services')}>Services</button>
```

In this example, the active state will be updated based on the link/button that is clicked.

-You can access the `activeLink` value to apply different styles or perform additional logic based on the active link/button:

```js
<button className={activeLink === 'home' ? 'active' : ''}>Home</button>
<button className={activeLink === 'about' ? 'active' : ''}>About</button>
<button className={activeLink === 'services' ? 'active' : ''}>Services</button>
```

By comparing the `activeLink` value with each link/button, you can conditionally apply the `active` class or any other styling as needed.

### Example

Here's a simple example demonstrating the usage of `react-activenav-button`:

```js
import React from "react";
import ActiveNavButton from "react-activenav-button";

function Navigation() {
  const { activeLink, handleButtonClick } = ActiveNavButton("home");

  return (
    <nav>
      <button
        onClick={handleButtonClick("home")}
        className={activeLink === "home" ? "active" : ""}
      >
        Home
      </button>
      <button
        onClick={handleButtonClick("about")}
        className={activeLink === "about" ? "active" : ""}
      >
        About
      </button>
      <button
        onClick={handleButtonClick("services")}
        className={activeLink === "services" ? "active" : ""}
      >
        Services
      </button>
    </nav>
  );
}

export default Navigation;
```

In this example, the active link state is managed using the `ActiveNavButton` hook, and the active link/button is visually indicated by applying the `active` class.

### License

This project is licensed under the MIT License.<br/>

Feel free to modify and customize the code according to your needs.<br/>

If you encounter any issues or have any suggestions, please open an [issue](https://github.com/4SAMU/react-activenav-button/issues) on the GitHub repository.<br/>

### Contributing

Contributions are welcome! If you have any improvements or additional features, feel free to submit a pull request.

### Author

4SAMU - [GitHub](https://github.com/4SAMU) - [portfolio](https://samuel-nzomo.vercel.app/)

If you have any questions or need further assistance, please feel free to contact me.

Enjoy using `react-activenav-button` in your projects!
