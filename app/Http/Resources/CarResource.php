<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class CarResource extends JsonResource
{

    public function toArray($request): array|Arrayable|JsonSerializable
    {
        return [
            'id' => $this->resource->id,
            'class' => $this->resource->class,
            'model' => $this->resource->model,
            'type' => $this->resource->type,
            'vin' => $this->resource->vin,
            'vrm' => $this->resource->vrm,
            'start_busy_date' => $this->resource->start_busy_date,
            'end_busy_date' => $this->resource->end_busy_date,
        ];
    }
}
