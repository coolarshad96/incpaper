import React from 'react';
import './CreatePage.css';
export default function CreatePage() {
  return (
    <div className='createpage-content'>
        <div className='createpage-body'>
            <div>
                <label>Company logo: </label>
                <input type="file" />
            </div>
            <div>
                <label>Company name: </label>
                <input type="text" />
            </div>
            <div>
                <label>Company address: </label>
                <input type="text" />
            </div>
            <div>
                <label>Company contacts: </label>
                <input type="text" />
            </div>
            <div>
                <label>Company email: </label>
                <input type="email" />
            </div>
            <div>
                <label>Company website: </label>
                <input type="text" />
            </div>
            <div>
                <label>Company fax: </label>
                <input type="text" />
            </div>
            <div>
                <label>Company description: </label>
                <textarea maxLength="150"/>
            </div>
            <div>
                <label>Company category: </label>
               <select>
                <option>Textile</option>
                <option>FMCG</option>
                <option>Service</option>
                <option>MAnufacturing</option>
               </select>
            </div>
            <div>
                <label>Company/Stock images: </label>
                <input type="file" />
            </div>
            <div>
                <label>Opening/Closing time: </label>
                <label>Monday: </label>
                <input type="text" />
                <label>Tuesday: </label>
                <input type="text" />
                <label>Wednesday: </label>
                <input type="text" />
                <label>Thursday: </label>
                <input type="text" />
                <label>Friday: </label>
                <input type="text" />
                <label>Saturday: </label>
                <input type="text" />
                <label>Sunday: </label>
                <input type="text" />
            </div>
        </div>
    </div>
  )
}
