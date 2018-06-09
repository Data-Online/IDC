// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

export class AccessProtocol
{
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
    constructor(id?: string, offTake?: string)
    {

        this.id = id;
        this.offTake = offTake;
    }

    public id: string;
    public offTake: string;
}
