import React from 'react'

function TodoList(props) {
  return (<>
    {/* <li>
      <button className='btn btn-danger ml-4'
        style={{ marginLeft: '20px', padding: '10px 40px 10px 50px' }}
        onClick={() => { props.onChange(props.id) }}>X</button>
    </li> */}
    <div className='row'>
    <div className="text-center">
      <table class="table table-striped">
        <tbody>
          <tr>
            <td>{props.item}</td>
            <td>
              <button className='btn btn-danger ml-4'
                  style={{ marginLeft: '20px', padding: '0px 40px 0px 50px' }}
                  onClick={() => { props.onChange(props.id) }}>X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    
  </>
  )
}

export default TodoList