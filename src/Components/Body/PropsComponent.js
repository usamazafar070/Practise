const PropsComponent = (exampleArray) => {
    return (
      <div>
        <table>
          <tr>
            <td>{exampleArray.array[0].name}</td>
          </tr>
          <tr>
            <td>{exampleArray.array[0].email}</td>
          </tr>
        </table>
      </div>
    );
}

export default PropsComponent;