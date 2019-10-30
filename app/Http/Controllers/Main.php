<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Main extends Controller
{
    public function fetchProperty(Request $request)
    {
        $id = $request->query('id');
        $info = DB::table('shopping_centres')
            ->select('centre_code as code', 'centre_name as name', 'str_addr1 as address1', 'str_addr2 as address2', 'str_addr3 as address3', 'str_code as postcode', 'region', 'trading_days', 'trading_hours', 'trading_holidays', 'overview', 'map_url', 'emergency_number')
            ->where('centre_code', $id)
            ->first();

        $tenants = DB::table('centre_tenants')
            ->select('t_name as name', 't_shop_no as shopNumber', 't_phone as contactNumber', 't_url as url')
            ->where('t_centre_code', $id)
            ->get();

        $propertyData = [
            'info' => $info,
            'tenants' => $tenants
        ];

        return $propertyData;
    }
}
