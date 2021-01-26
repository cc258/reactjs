import React, { memo } from 'react'

import './table.scss'

interface TableProps {
	name?: string
	age?: number
}

const Table: React.FC<TableProps> = ({ name = 'leo', age = 18 }) => {
	return (
		<section className="table-box">
			<table cellpadding="0" cellspacing="0">
				<caption>纯CSS table表格 thead固定 tbody滚动</caption>

				<thead>
					<tr>
						<th>序 号</th>
						<th>姓 名</th>
						<th>年 龄</th>
						<th>性 别</th>
						<th>手 机</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>001</td>
						<td>Name</td>
						<td>28</td>
						<td>女</td>
						<td>Mobile</td>
					</tr>
					<tr>
						<td>002</td>
						<td>Name</td>
						<td>28</td>
						<td>男</td>
						<td>Mobile</td>
					</tr>
					<tr>
						<td>003</td>
						<td>Name</td>
						<td>28</td>
						<td>女</td>
						<td>Mobile</td>
					</tr>
					<tr>
						<td>004</td>
						<td>Name</td>
						<td>28</td>
						<td>男</td>
						<td>Mobile</td>
					</tr>
					<tr>
						<td>005</td>
						<td>Name</td>
						<td>28</td>
						<td>女</td>
						<td>Mobile</td>
					</tr>
					<tr>
						<td>006</td>
						<td>Name</td>
						<td>28</td>
						<td>男</td>
						<td>Mobile</td>
					</tr>
					<tr>
						<td>007</td>
						<td>Name</td>
						<td>28</td>
						<td>女</td>
						<td>Mobile</td>
					</tr>
					<tr>
						<td>008</td>
						<td>Name</td>
						<td>28</td>
						<td>男</td>
						<td>Mobile</td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="5">
							【table，thead，tbody，tfoot】 colspan：合并行， rowspan：合并列{' '}
						</td>
					</tr>
				</tfoot>
			</table>
		</section>
	)
}

export default memo(Table)
