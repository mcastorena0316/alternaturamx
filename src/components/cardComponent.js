import React from "react"

import { Card } from "react-bootstrap";

const CardComponent = ({title1,title2, title3}) => {
	return(
		<>
			<Card>
					<Card.Body>
						<p>{title1}</p> 
						{!title3 && (<><p>{title2}</p><p>{'>'}</p></>)}
						{title3 && (
						<>
							<div>
								<p>{title2}</p>
								<p>{title3}</p>
							</div>
							<p><i class="fa fa-ellipsis-v" aria-hidden="true"></i></p>
						</>)}
					</Card.Body>
			</Card>
    </>
  )
}

export default CardComponent;