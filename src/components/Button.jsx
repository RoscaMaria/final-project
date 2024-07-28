const Button = ({ onclick, children, as: Component = 'button', ...rest }) => {
    return (
        <Component onclick={onclick} className="button" {...rest}>
            {children}
        </Component>
    );
};

export default Button;