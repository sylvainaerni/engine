pc.extend(pc, function () {
    /**
     * @name pc.Ray
     * @class An infinite ray
     * @constructor Creates a new infinite ray starting at a given origin and pointing in a given direction.
     * @example
     * // Create a new ray starting at the position of this entity and pointing down
     * // the entity's negative Z axis
     * var ray = new pc.Ray(this.entity.getPosition(), this.entity.forward);
     * @param {pc.Vec3} [origin] The starting point of the ray. The constructor takes a copy of this parameter.
     * Defaults to the origin (0, 0, 0).
     * @param {pc.Vec3} [direction] The direction of the ray.  The constructor takes a copy of this parameter.
     * Defaults to a direction down the world negative Z axis (0, 0, -1).
     */
    var Ray = function Ray(origin, direction) {
        this.origin = (origin !== undefined) ? origin.clone() : new pc.Vec3(0, 0, 0);

        if ((direction !== undefined) && (direction.length() > 0)) {
            this.direction = direction.clone().normalize();
        } else {
            this.direction = new pc.Vec3(0, 0, -1);
        }
    };

    return {
        Ray: Ray
    };
}());