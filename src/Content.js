const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => (
                <Part key={index} name={part.name} exercises={part.exercises} />
            ))}
        </div>
    );
};

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name} {exercises}
        </p>
    );
};

export default Content;