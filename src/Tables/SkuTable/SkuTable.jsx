import React from 'react'

const SkuTable = () => {
    const data = [
        {
            srNo: 1,
            category: "Gold",
            product: 'Jumka',
            design: 'Chitrakut Neckless',
            SKU: 'BN100',
            itemName: 'Bangla',
            openingQty: 10,
            openingGrossWt: 120.5,
            openingNetWt: 118.0,
            stockInQty: 5,
            stockInGrossWt: 60.2,
            saleQty: 3,
            saleGrossWt: 36.1,
            closingQty: 12,
            closingGrossWt: 144.6,
            closingNetWt: 141.9,
        },
        {
            srNo: 2,
            category: "Gold",
            product: 'Jumka',
            design: 'Chitrakut Neckless',
            SKU: 'BN100',
            itemName: 'Bangla',
            openingQty: 10,
            openingGrossWt: 120.5,
            openingNetWt: 118.0,
            stockInQty: 5,
            stockInGrossWt: 60.2,
            saleQty: 3,
            saleGrossWt: 36.1,
            closingQty: 12,
            closingGrossWt: 144.6,
            closingNetWt: 141.9,
        },
    ];
    return (
        <div>
            <div className="w-full overflow-x-auto bg-white p-2">
                <table className="min-w-[1200px] w-full border border-gray-300">
                    <thead className="sticky top-0 bg-gray-200 text-black text-[14px]">
                        <tr>
                            <th className="px-2 py-2 border">Sr No</th>
                            <th className="px-2 py-2 border">SKU</th>
                            <th className="px-2 py-2 border">Item Name</th>
                            <th className="px-2 py-2 border">Opening Qty</th>
                            <th className="px-2 py-2 border">Opening Gross Wt</th>
                            <th className="px-2 py-2 border">Opening Net Wt</th>
                            <th className="px-2 py-2 border">Stock In Qty</th>
                            <th className="px-2 py-2 border">Stock In Gross Wt</th>
                            <th className="px-2 py-2 border">Sale Qty</th>
                            <th className="px-2 py-2 border">Sale Gross Wt</th>
                            <th className="px-2 py-2 border">Closing Qty</th>
                            <th className="px-2 py-2 border">Closing Gross Wt</th>
                            <th className="px-2 py-2 border">Closing Net Wt</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((row) => (
                            <tr
                                key={row.srNo}
                                className="text-center even:bg-gray-100 hover:bg-gray-200 text-[14px]"
                            >
                                <td className="px-2 py-2 border">{row.srNo}</td>
                                <td className="px-2 py-2 border">{row.SKU}</td>
                                <td className="px-2 py-2 border">{row.itemName}</td>
                                <td className="px-2 py-2 border">{row.openingQty}</td>
                                <td className="px-2 py-2 border">{row.openingGrossWt}</td>
                                <td className="px-2 py-2 border">{row.openingNetWt}</td>
                                <td className="px-2 py-2 border">{row.stockInQty}</td>
                                <td className="px-2 py-2 border">{row.stockInGrossWt}</td>
                                <td className="px-2 py-2 border">{row.saleQty}</td>
                                <td className="px-2 py-2 border">{row.saleGrossWt}</td>
                                <td className="px-2 py-2 border">{row.closingQty}</td>
                                <td className="px-2 py-2 border">{row.closingGrossWt}</td>
                                <td className="px-2 py-2 border">{row.closingNetWt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SkuTable