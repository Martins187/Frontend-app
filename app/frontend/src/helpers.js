export function selectItem(id, itemsArray)
{
    for(let i = 0; i < itemsArray.length; i++)
    {
        if(itemsArray[i].id == id)
        {
            itemsArray[i].isSelected = !itemsArray[i].isSelected
        }
    }
}

export function checkIfMinimumSelected(minimumRequired, itemsArray)
{
    let selectedItems = 0
    
    for(let i = 0; i < itemsArray.length; i++)
    {
        if(itemsArray[i].isSelected)
        {
            selectedItems++
        }
    }

    if(selectedItems >= minimumRequired)
    {
        return true
    }

    return false
}