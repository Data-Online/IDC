// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

export class OffTake
{
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
    constructor(id?: string, name?: string)
    {

        this.id = id;
        this.name = name;
    }

    public id: string;
    public name: string;
}
